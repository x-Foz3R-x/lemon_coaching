import Card from "./ui/card";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  hasCustomLayout?: boolean;
}

export default function ProcessCard({
  title,
  description,
  icon,
}: SkillCardProps) {
  return (
    <Card>
      {icon}
      <h4 className="font-pixel text-lg">{title}</h4>
      <p className="text-xs text-slate-400">{description}</p>
    </Card>
  );
}
