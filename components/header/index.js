import React from "react";
import cn from "classnames";
import Link from "../ui/Link";
import LogotypeComponent from "../ui/Logotype";
import MenuButton from "../ui/Buttons/Menu";
import TelegramIcon from "../../svgs/telegram.svg";

class Header extends React.Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };

  render() {
    return (
      <>
        <style jsx="true">{`
          header {
            display: flex;
            padding: 20px 2rem;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
          }

          header .logotype {
            margin-right: 20px;
          }

          nav {
            display: flex;
          }

          nav ul {
            display: flex;
            list-style: none;
            padding: 0;
          }

          nav ul li {
            padding: 0 1rem;
            display: flex;
            align-items: center;
          }

          nav ul li:first-child {
            padding-left: 0;
          }

          nav ul li:last-child {
            padding-right: 0;
          }

          .header-cta .round-link {
            margin-right: 20px;
            vertical-align: top;
          }

          .header-cta .round-link:last-child {
            margin-right: 0;
          }

          .header-menu {
            display: none;
          }

          @media screen and (min-width: 1024px) {
            .header-cta .round-link {
              color: #fff;
              border-color: #fff;
            }

            .header-cta .round-link svg {
              fill: #fff;
            }

            .header-cta .round-link:hover {
              border-color: #000;
            }
          }

          @media screen and (max-width: 1024px) {
            header {
              flex-direction: column;
              align-items: flex-start;
              margin-top: 0;
              padding-left: 1rem;
              padding-right: 1rem;
            }

            nav {
              margin-bottom: 20px;
            }

            nav ul li {
              padding: 0 0.5rem;
            }

            .header-cta {
              text-align: center;
              width: 100%;
            }
          }

          @media screen and (max-width: 768px) {
            nav {
              width: 100%;
              justify-content: space-between;
              align-items: center;
            }

            nav ul {
              position: fixed;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              transform: translateX(100%);
              transition: transform 0.4s ease-in-out;
              background: #c6c6c6;
              flex-direction: column;
              justify-content: center;
              padding: 0 1rem;
            }

            nav ul.open {
              transform: translateX(0);
            }

            nav ul li {
              padding: 0;
              display: block;
              text-align: center;
            }

            nav ul li .link {
              padding: 20px 20px;
            }

            .header-menu {
              display: block;
              z-index: 10;
            }
          }
        `}</style>
        <header>
          <nav>
            <LogotypeComponent />
            <ul
              className={cn({
                open: this.state.isMenuOpen
              })}
            >
              <li>
                <Link href="/" title="Сообщество">
                  Сообщество
                </Link>
              </li>
              <li>
                <Link href="/" title="Подкасты">
                  Подкасты
                </Link>
              </li>
              <li>
                <Link href="/" title="Для начинающих в IT">
                  Для начинающих в IT
                </Link>
              </li>
              <li>
                <Link href="/" title="Мероприятия и тусовки">
                  Мероприятия и тусовки
                </Link>
              </li>
            </ul>
            <MenuButton
              className="header-menu"
              isActive={this.state.isMenuOpen}
              onClick={this.toggleMenu}
            />
          </nav>
          <div className="header-cta">
            <Link href="/" className="round-link" title="Присоединиться">
              Присоединиться
            </Link>
            <Link href="/" className="round-link" title="Telegram">
              <TelegramIcon />
              Telegram
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
