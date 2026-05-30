const MASK =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/dc2e0a97-5a60-467d-bd7b-4bbc49ae8ae1.svg";
const COFEE_BEAN_1 = "../whats_new/bean1.png";
const COFEE_BEAN_2 = "../whats_new/bean2.png";
const COFEE_BEAN_3 = "../whats_new/bean3.png";
const OMBLETE = "../whats_new/omblete.png";

export function WhatsNewSection() {
  return (
    <div className="relative">
      <section className="relative h-[377px] ">
        <img
          src={MASK}
          alt=""
          aria-hidden
          className="w-full h-full object-cover relative z-10 "
          style={{ mixBlendMode: "multiply", opacity: 1 }}
        />

        <img
          src={COFEE_BEAN_3}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 left-[560px] top-[-54px] w-[181.99px] h-[157.77px]"
        />
        <img
          src={COFEE_BEAN_1}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 left-[230px] top-[15px] w-[181.993px] h-[157.766px]"
        />
        <img
          src={COFEE_BEAN_2}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 left-[961px] top-[112px] w-[227.228px] h-[181.615px]"
        />
        <img
          src={OMBLETE}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 left-[770px] top-[256.5px] w-[167px] h-[171px]"
        />

        <div className="absolute left-[384px] top-[133px] z-20 text-white">
          <h2 className="text-[48px] font-recoleta font-semibold mb-4">
            What's New at Adhira & Appa
          </h2>
          <p className="text-[28px] font-outfit m-0">
            More reasons to come back.
          </p>
        </div>
      </section>
      <div className="w-full h-[544px]">
        <img
          src="../medium_image.png"
          alt=""
          className="h-[574px] w-full object-cover object-bottom absolute top-[359px]  "
        />
      </div>
    </div>
  );
}
