import React, { useState } from "react";
interface FoodMenuHeroProps {
  className?: string;
  style?: React.CSSProperties;
  onSeeMenu?: () => void;
}

/**
 * Frame238
 * Production-ready version of the Figma-generated Food Menu Hero component.
 */
export const FoodMenuHero: React.FC<FoodMenuHeroProps> = ({
  className = "",
  style = {},
  onSeeMenu,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleSeeMenuClick = () => {
    if (onSeeMenu) {
      onSeeMenu();
    } else {
      console.log("Navigate to full menu");
    }
  };
  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "393px",
    height: "1907px",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    margin: "0 auto",
    backgroundColor: "rgba(255, 81, 0, 1)",
    ...style,
  };
  const imageShadow = "-11px 30px 25px rgba(0, 0, 0, 0.3)";
  const smallImageShadow = "-4px 4px 25px rgba(0, 0, 0, 0.2)";
  return (
    <section
      className={`food-menu-hero ${className}`.trim()}
      style={containerStyle}
      aria-label="Food Menu Hero"
    >
      {/* Background and Patterns */}
      <div
        style={{
          width: "1263px",
          height: "2049px",
          position: "absolute",
          left: "-435px",
          top: "-1px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "393px",
            height: "2038px",
            backgroundColor: "rgba(255, 81, 0, 1)",
            position: "absolute",
            left: "435px",
            top: "11px",
          }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/b5765e75-0654-409a-84fc-890600ee8bfd.svg"
          alt=""
          style={{
            width: "1263px",
            height: "13px",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
      </div>
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/24c07bc0-8f6e-4118-adad-4d498a511f82.svg"
        alt=""
        style={{
          width: "1263px",
          height: "2049px",
          position: "absolute",
          left: "-435px",
          top: "-1px",
          pointerEvents: "none",
        }}
      />
      {/* Hero Food Items */}
      {/* 0meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/bc262324-86a6-4aa3-80ed-756ab9bf60d7.png"
        alt="0meal.png"
        style={{
          width: "157.73px",
          height: "160px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "43.52px",
          top: "46px",
          objectFit: "cover",
        }}
      />
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/f66d1b81-3bff-4b1e-be36-69da59a58c2b.png"
        alt="ada0.png"
        style={{
          width: "52.73px",
          height: "69.66px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "13px",
          top: "56.4px",
          objectFit: "cover",
        }}
      />
      {/* Text Group 1 */}
      <div
        style={{
          width: "160px",
          height: "72px",
          position: "absolute",
          left: "178px",
          top: "170px",
        }}
      >
        <span
          style={{
            width: "149.63px",
            height: "44px",
            color: "white",
            fontSize: "16px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "21.8px",
            textAlign: "center",
            position: "absolute",
            left: "10.38px",
            top: "28px",
            display: "block",
          }}
        >
          The traditional meets the global.
        </span>
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/2d7bff9b-6e49-490a-8caf-8dd37be28e23.svg"
          alt=""
          style={{
            width: "12.18px",
            height: "16.22px",
            position: "absolute",
            left: "37.16px",
            top: "0.3px",
          }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/6594766e-ef79-4002-8905-ff62456586d3.svg"
          alt=""
          style={{
            width: "19px",
            height: "21px",
            position: "absolute",
            left: "4.69px",
            top: "0px",
          }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/5d42a6a0-a0c3-43e0-8815-1d45de8abd51.svg"
          alt=""
          style={{
            width: "18.49px",
            height: "4.78px",
            position: "absolute",
            left: "0px",
            top: "34.88px",
          }}
        />
      </div>
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/01dbbf6a-b92a-47c8-b52b-994f89b15960.png"
        alt="ada1.png"
        style={{
          width: "118px",
          height: "118px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "323px",
          top: "114px",
          objectFit: "cover",
        }}
      />
      {/* Text Group 2 */}
      <div
        style={{
          width: "174px",
          height: "89px",
          position: "absolute",
          left: "28px",
          top: "353px",
        }}
      >
        <span
          style={{
            width: "125px",
            height: "44px",
            color: "white",
            fontSize: "16px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "21.8px",
            textAlign: "center",
            position: "absolute",
            left: "48.95px",
            top: "45px",
            whiteSpace: "pre-line",
          }}
        >
          {"The rooted meets\nthe refined."}
        </span>
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/4ad3cc37-6da2-47e4-b17b-2a39865f249b.svg"
          alt=""
          style={{
            width: "76.29px",
            height: "66.81px",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
      </div>
      {/* 1meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/52e2d239-559a-4340-9eb1-3f29c02badd5.png"
        alt="1meal"
        style={{
          width: "142px",
          height: "134px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "233px",
          top: "375px",
          objectFit: "cover",
        }}
      />
      {/* 2meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/69f1af02-d46d-447e-a236-18fb8e9813b6.png"
        alt="2meal.png"
        style={{
          width: "140px",
          height: "142px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "41px",
          top: "497px",
          objectFit: "cover",
        }}
      />
      {/* 3meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/a9a305f6-222a-4e65-9abc-5578c6b7f6e1.png"
        alt="3meal.png"
        style={{
          width: "122px",
          height: "125px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "292px",
          top: "650px",
          objectFit: "cover",
        }}
      />
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/7a533e9b-fce4-4cff-8ee5-76c1d1526c28.png"
        alt="ada2.png"
        style={{
          width: "40px",
          height: "33.75px",
          boxShadow: smallImageShadow,
          position: "absolute",
          left: "45px",
          top: "480px",
          objectFit: "cover",
        }}
      />
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/594b37bb-b41e-4e80-ac8b-fd2a99482a32.png"
        alt="ada3.png"
        style={{
          width: "87.8px",
          height: "93.73px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "161px",
          top: "684px",
          objectFit: "cover",
        }}
      />
      {/* Text Group 3 */}
      <div
        style={{
          width: "159px",
          height: "97px",
          position: "absolute",
          left: "117px",
          top: "847px",
        }}
      >
        <span
          style={{
            width: "159px",
            height: "44px",
            color: "white",
            fontSize: "16px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "21.8px",
            textAlign: "center",
            position: "absolute",
            left: "0px",
            top: "0px",
            whiteSpace: "pre-line",
          }}
        >
          {"The familiar meets the\nunexpected."}
        </span>
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/a005a6c4-b53d-4ced-bd08-336e8780f579.svg"
          alt=""
          style={{
            width: "28.47px",
            height: "43.02px",
            position: "absolute",
            left: "19.27px",
            top: "54px",
          }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/5d89bf54-c8d5-446c-b9fb-f7c1db539658.svg"
          alt=""
          style={{
            width: "10.15px",
            height: "37.46px",
            position: "absolute",
            left: "71.43px",
            top: "58.77px",
          }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/d4180b6b-470e-464b-a14a-1b2bdcd401a8.svg"
          alt=""
          style={{
            width: "27px",
            height: "34px",
            position: "absolute",
            left: "102px",
            top: "57px",
          }}
        />
      </div>
      {/* 4meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/00175aee-238e-417e-87a8-6db8d452dea7.png"
        alt="4meal"
        style={{
          width: "111px",
          height: "109px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "239px",
          top: "1013px",
          objectFit: "cover",
        }}
      />
      {/* 5meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/1bead2a0-3cce-4509-8c15-c2ce013e5215.png"
        alt="5meal"
        style={{
          width: "222px",
          height: "227px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "-40px",
          top: "1029px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          width: "71.13px",
          height: "113px",
          overflow: "hidden",
          position: "absolute",
          left: "0px",
          top: "821px",
        }}
      >
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/44ec4e42-3bfa-4050-bb80-7480791e0976.png"
          alt="ada4.png"
          style={{
            width: "111.66px",
            height: "113px",
            position: "absolute",
            left: "-40.52px",
            top: "0px",
            objectFit: "cover",
          }}
        />
      </div>
      {/* 6meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/36f10ce5-be9e-4add-b9d8-9891238561ea.png"
        alt="6meal"
        style={{
          width: "168.3px",
          height: "170px",
          position: "absolute",
          left: "280px",
          top: "1372px",
          objectFit: "cover",
        }}
      />
      {/* Text Group 4 */}
      <div
        style={{
          width: "266px",
          height: "116.4px",
          position: "absolute",
          left: "148px",
          top: "1236px",
        }}
      >
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/692cde05-7ce3-4af1-9d81-ba5c930ed29a.svg"
          alt=""
          style={{
            width: "99.1px",
            height: "101.2px",
            position: "absolute",
            left: "167px",
            top: "0px",
          }}
        />
        <span
          style={{
            width: "206px",
            height: "44px",
            color: "white",
            fontSize: "16px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "21.8px",
            textAlign: "center",
            position: "absolute",
            left: "0px",
            top: "72.4px",
            whiteSpace: "pre-line",
          }}
        >
          {"Everything you love. Nothing\nlike you've had."}
        </span>
      </div>
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/c2b86bbb-8cfe-4918-b8fe-9b5e42db2350.png"
        alt="ada9.png"
        style={{
          width: "71.53px",
          height: "80.97px",
          boxShadow: "-11px 30px 25px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          left: "-14px",
          top: "1486.88px",
          objectFit: "cover",
        }}
      />

      {/* 7meal */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/52c19013-57d9-47f5-acaa-b7e98c03bf7f.png"
        alt="7meal"
        style={{
          width: "197.06px",
          height: "209.47px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "75px",
          top: "1457px",
          objectFit: "cover",
        }}
      />
      {/* Name: Decorative filled Vectors */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/5b23c1ad-4b1f-4c26-8d17-70d60161a680.svg"
        alt="Decorative filled Vectors"
        style={{
          width: "52px",
          height: "169px",
          position: "absolute",
          left: "245px",
          top: "4px",
        }}
      />
      {/* p1 */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/17bf3e8f-386f-4582-8a7c-e30133492518.svg"
        alt="p1"
        style={{
          width: "209.21px",
          height: "160.38px",
          position: "absolute",
          left: "54.79px",
          top: "231.63px",
        }}
      />
      {/* p2 */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/611cd8ea-005e-44b1-9d3c-d0c49f7b3a38.svg"
        alt="p2"
        style={{
          width: "189.37px",
          height: "173.13px",
          position: "absolute",
          left: "55.84px",
          top: "1339.24px",
        }}
      />
      {/* p3 */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/0432da78-2931-46f2-8554-67e14f0548c7.svg"
        alt="p3"
        style={{
          width: "318.66px",
          height: "385.65px",
          position: "absolute",
          left: "27.71px",
          top: "462.56px",
        }}
      />
      {/* p4 */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/95ebcc6d-6188-49ad-beac-3cecf5f7e9ce.svg"
        alt="p4"
        style={{
          width: "195.45px",
          height: "342.5px",
          position: "absolute",
          left: "174.36px",
          top: "956px",
        }}
      />
      {/* p5 */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/73ddd966-7cfa-4cbe-b2fd-5fbb7bbf0d9b.svg"
        alt="p5"
        style={{
          width: "21.05px",
          height: "129px",
          position: "absolute",
          left: "190px",
          top: "1642.5px",
        }}
      />
      {/* Additional Garnish items */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/30c7f1ae-02df-4129-ac20-5e41dc043e6b.png"
        alt="ada7.png"
        style={{
          width: "42px",
          height: "27.19px",
          boxShadow: "-17px 15px 25px rgba(0, 0, 0, 0.3)",
          position: "absolute",
          left: "34px",
          top: "1403.83px",
          objectFit: "cover",
        }}
      />
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/5bcf5ff4-d175-4136-b53b-04d4907bb1ec.png"
        alt="ada6.png"
        style={{
          width: "39.02px",
          height: "36.85px",
          boxShadow: imageShadow,
          position: "absolute",
          left: "36.35px",
          top: "1364.06px",
          objectFit: "cover",
        }}
      />
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/fb31e445-5445-432e-80a3-3dc434944f6b.png"
        alt="ada5.png"
        style={{
          width: "92.82px",
          height: "88.02px",
          boxShadow: "-4.36px 11.9px 9.92px rgba(0, 0, 0, 0.3)",
          position: "absolute",
          left: "210px",
          top: "1127.81px",
          objectFit: "cover",
        }}
      />
      {/* Interactive Footer CTA */}
      <div
        className="frame-57"
        style={{
          width: "121px",
          height: "76px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          position: "absolute",
          left: "136px",
          top: "1783px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          See the full menu
        </span>
        <button
          onClick={handleSeeMenuClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="See the full menu"
          style={{
            width: "40px",
            height: "40px",
            position: "relative",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "white",
              borderRadius: "8px",
              position: "absolute",
              left: "0px",
              top: "0px",
              transition: "box-shadow 0.2s ease-in-out",
              boxShadow: isHovered ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
            }}
          />
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/d644fe2f-4b0f-4e6f-80de-33639bc6764e.svg"
            alt="Arrow icon"
            style={{
              width: "21px",
              height: "21px",
              position: "absolute",
              left: "9.5px",
              top: "10px",
            }}
          />
        </button>
      </div>
    </section>
  );
};
