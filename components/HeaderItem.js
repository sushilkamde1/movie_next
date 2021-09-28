export default function HeaderItem({ title, Icon, url }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-pulse" />
      <p className="opacity-0 group-hover:opacity-100 group-hover:animate-pulse tracking-widest">
        {title}
      </p>
    </div>
  );
}
