import background from "../../assets/background.avif";

export default function Background() {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-fit flex-none flex justify-end">
        <picture>
          <source
            srcSet={background}
            type="image/avif"
          />
          <img
            src={background}
            alt="bg"
            className="w-full flex-none max-w-none"
          />
        </picture>
      </div>
    </div>
  );
}
