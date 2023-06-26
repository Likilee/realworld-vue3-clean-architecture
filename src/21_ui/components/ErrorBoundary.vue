<template>
  <template v-if="hasError">
    <component :is="fallBack" v-if="fallBack" :error="error" :error-info="errorInfo" v-bind="fallBackProps" />
    <slot v-else-if="slots.fallback" name="fallback"></slot>
    <ErrorBoundaryDefaultFallback v-else />
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>

<script setup lang="ts">
import ErrorBoundaryDefaultFallback from '@/21_ui/components/ErrorBoundaryDefaultFallback.vue';

interface Props {
  fallBack?: Component;
  fallBackProps?: Record<string, any>;
  stopPropagation?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fallBack: undefined,
  fallBackProps: undefined,
  stopPropagation: false,
});

interface Emits {
  (
    e: 'error-captured',
    data: { error: Error; instance: ComponentPublicInstance | null; info: string }
  ): void;
}
const emit = defineEmits<Emits>();

interface Slots {
  default: any;
  fallback: any;
}
const slots = defineSlots<Slots>();

const hasError = ref(false);
const error = ref<Error | null>(null);
const errorInfo = ref<string | null>(null);

onErrorCaptured((err, instance, info) => {
  hasError.value = true;
  error.value = err;
  errorInfo.value = info;

  emit('error-captured', { error: err, instance, info });

  return props.stopPropagation ? false : undefined;
});
</script>

<style scoped lang="scss"></style>
