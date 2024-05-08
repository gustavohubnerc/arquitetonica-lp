
interface FeatureCardProps {
  title: string;
  children: string;
}

export function FeatureCard({title, children}: FeatureCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{children}
      </p>
    </div>
  )
}

export default FeatureCard;
  