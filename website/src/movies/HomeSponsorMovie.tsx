"use client";

const HomeSponsorMovie = () => (
  <section className="bg-white py-12 md:py-20">
    <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-[1.6rem] leading-[1.167] font-bold text-[#0c1c32] md:text-[2.2rem]">
          Sponsors
        </h3>
      </div>
      <div className="mb-8 text-center">
        {/* The OpenCollective strip draws its avatars as near-white plates
            (#e6f3ff letter circles, #f0f1f2 guest circles) that sat on the
            old dark background. On white they measure ~1.13:1 and read as
            loose marks, so the strip gets a tinted plate of its own. */}
        <a
          href="https://opencollective.com/typia"
          className="inline-block rounded-lg border border-[#c1d3eb] bg-[#f6f9fd] p-3 leading-[0] md:p-4"
        >
          <img
            src="https://opencollective.com/typia/backers.svg?avatarHeight=75&width=600"
            alt="Backers"
            className="max-w-full rounded-lg"
          />
        </a>
      </div>
      <div className="text-center">
        <p className="mx-auto max-w-[550px] text-[1.05rem] leading-[1.8] text-[#4c5e76]">
          Thanks for your support. Your{" "}
          <a
            href="https://opencollective.com/typia"
            className="text-[#184e95] underline transition-colors duration-200 hover:text-[#0f376c]"
          >
            donation
          </a>{" "}
          encourages typia development.
        </p>
      </div>
    </div>
  </section>
);
export default HomeSponsorMovie;
