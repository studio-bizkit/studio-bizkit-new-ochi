export default function Hero() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full margin padding-x">
            <div>
              <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                what we bake
              </h1>
            </div>
          </div>
          <div className="w-full border-t border-[#21212155]">
            <p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
              At Studio Bizkit, we blend creativity and craft to bake&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                designs that rise&nbsp;
              </span>
              and&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                brands that stick.{" "}
              </span>
              Every project is a custom recipe tailored to your unique flavor.
            </p>
          </div>
          <div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
            <div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
              <div className="w-[50%] sm:w-full xm:w-full">
                <p className="paragraph font-NeueMontreal text-secondry">
                  Our secret recipe is simple — three key ingredients:
                </p>
              </div>
              <div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
                <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry underline">
                      Purpose-driven
                    </p>
                    <p className="paragraph font-NeueMontreal text-secondry">
                      What’s the goal? We start by knowing exactly what you want
                      to achieve so every detail works toward your vision.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry underline">
                      Audience-focused
                    </p>
                    <p className="paragraph font-NeueMontreal text-secondry">
                      Who’s the crowd? Understanding your audience ensures we
                      bake a message that truly connects and converts.
                    </p>
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xm:w-full">
                  <div className="flex flex-col gap-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry underline">
                      Context-aware
                    </p>
                    <p className="paragraph font-NeueMontreal text-secondry">
                      Where’s the stage? Whether it’s digital, live, or in
                      between, we craft your story to fit the moment perfectly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
