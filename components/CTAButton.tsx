import Link from 'next/link';
import clsx from 'clsx';

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function CTAButton({ href, label, variant = 'primary', className }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variant === 'primary'
          ? 'bg-harvest-green text-harvest-cream hover:bg-harvest-moss focus-visible:outline-harvest-yellow'
          : 'border border-harvest-green text-harvest-green hover:bg-harvest-green hover:text-harvest-cream focus-visible:outline-harvest-yellow',
        className
      )}
    >
      {label}
    </Link>
  );
}
