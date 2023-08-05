import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-green-400 rounded-xl text-white"

    >
      <div class="space-y-4 text-center">
        <h1 class="text-red-500 text-4xl inline-block font-bold">Planet Express Shipping Co.</h1>
        <p class="text-xl max-w-lg text-red-500">
          Our crew is replaceable, your package isn't!
        </p>
        <div class={"row-auto"}>
          <img class={"inline-block w-32 h-32"} src={"../carbboard_box.png"} alt={"A cardboard box"}/>
        </div>
      </div>

      <div>
        <a
          href="shipping"
          class="block mt-4 text-red-600 cursor-pointer inline-flex items-center group text-red-700 bg-white px-8 py-2 rounded-md hover:bg-red-50 font-bold"
        >
          Ship a Package{" "}
        </a>
        <a
          href="about"
          class="block mt-4 transition-colors text-red-500 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
        >
          About Us{" "}
          <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
