import Link from "next/link";

export const MenuItem = (props: { name: string; href: string }) => (
  <>
    <div className="py-2 px-4">
      <Link href={props.href}>
        <a className="font-bold">{props.name}</a>
      </Link>
    </div>
  </>
);
