export default function SectionHeading({ title, description }) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}
