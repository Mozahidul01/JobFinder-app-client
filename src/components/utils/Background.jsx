export default function Background() {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <source
            srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
            type="image/avif"
          />
          <img
            src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
            alt=""
            className="w-[90rem] flex-none max-w-none hidden dark:block"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
}
