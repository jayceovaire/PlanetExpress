import { ComponentChildren } from "https://esm.sh/preact@10.15.1";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "API", href: "https://api-ninjas.com" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "pricing" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Fresh", href: "https://fresh.deno.dev" },
        { name: "Deno", href: "https://deno.land" },
      ],
    },
  ];

  return (
    <div class="bg-inherit flex flex-col md:flex-row justify-center md:max-w-screen-lg mx-auto gap-8 md:gap-16 px-8 py-8 text-sm">

      {menus.map((item) => (
        <div class="mb-4 md:mb-0" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-black-900 hover:text-red-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-black-900 space-y-2">
        <div class="text-xs">
          Website Created by JayceOvaire<br/>
          via Deno Fresh Framework
        </div>

        <a
          href="https://github.com/denoland/fresh"
          rel="noopener noreferrer"
          target={"_blank"}
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          Denoland Fresh
          <BrandGithub />
        </a>
        <br />
        <a href={'https://github.com/jayceovaire?tab=repositories'}
           rel="noopener noreferrer"
           target={"_blank"}
           class={'inline-block hover:text-black'}
           aria-label={"GitHub"}
           >
          Jayce Ovaire<BrandGithub />
        </a>
      </div>
    </div>
  );
}



