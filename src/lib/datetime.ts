import { DateTimeString } from '@/shared-kernel'

export function currentDatetime(): DateTimeString {
  return new Date().toISOString()
}
