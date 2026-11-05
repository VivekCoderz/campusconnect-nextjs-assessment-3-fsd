// Small coloured label used for assignment status and priority
export default function StatusBadge({ text }) {
  const className = "status " + text.toLowerCase();
  return <span className={className}>{text}</span>;
}
