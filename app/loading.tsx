export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark">
      <div className="text-center">
        <div className="inline-block relative w-16 h-16 mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-brand-gold/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-gold animate-spin" />
        </div>
        <p className="text-brand-muted-light text-sm tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}