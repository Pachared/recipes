import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'

type StopwatchBadgeProps = {
  minutes: number
}

export function StopwatchBadge({ minutes }: StopwatchBadgeProps) {
  return (
    <div className="stopwatch" aria-label={`${minutes} นาที`}>
      <TimerOutlinedIcon />
      <strong>{minutes}</strong>
      <span className="latin">mins</span>
    </div>
  )
}
