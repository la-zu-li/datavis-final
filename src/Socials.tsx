import React from "react";

interface SocialItemProps {
  name: string;
  href: string;
  icon: string;
}

const SocialItem: React.FC<SocialItemProps> = ({ name, href, icon }) => (
  <a href={href}>
    <svg>
      <use href={icon}></use>
    </svg>
    {name}
  </a>
);

const Socials: React.FC = () => {
  return (
    <div id="social">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Connect with us</h2>
      <p>Join the Vite community</p>
      <ul>
        <li>
          <SocialItem
            name="GitHub"
            href="https://github.com/vitejs/vite"
            icon="/icons.svg#github-icon"
          />
        </li>
        <li>
          <SocialItem
            name="Discord"
            href="https://chat.vite.dev/"
            icon="/icons.svg#discord-icon"
          />
        </li>
        <li>
          <SocialItem
            name="X.com"
            href="https://x.com/vite_js"
            icon="/icons.svg#x-icon"
          />
        </li>
        <li>
          <SocialItem
            name="Bluesky"
            href="https://bsky.app/profile/vite.dev"
            icon="/icons.svg#bluesky-icon"
          />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
