import Image from 'next/image'
import Link from "next/link";

function getStaticProps() {
  return {
    items: [
      {
        link: ' https://inspermileage.com',
        text: 'Início',
      },
      {
        link: ' https://github.com',
        text: 'Github',
      },
      {
        link: ' https://lucianofelix.com.br/',
        text: 'Luciano',
      },
    ]
  };
}

export default function Home() {
  const staticProps = getStaticProps();

  return (
    <>
      <header className="p-4">
        <nav>
          <ul className="font-semibold leading-[2.5] text-gray-600 flex justify-between gap-4">
            <li className="flex-none">
              <Link href="/">
                <Image
                  src="/image/insper-mileage.svg"
                  alt="Insper Mileage"
                  width={117}
                  height={30}
                  className="h-10 w-auto"
                />
                <span className="sr-only">Início</span>
              </Link>
            </li>
            {
              staticProps.items.map((item) =>
                <li className="hidden md:block">
                  <Link 
                    href={item.link}
                    className="hover:underline decoration-primary-500"
                  >
                    {item.text}
                  </Link>
                </li>
              )
            }
          </ul>
        </nav>
      </header>
    </>
  );
}