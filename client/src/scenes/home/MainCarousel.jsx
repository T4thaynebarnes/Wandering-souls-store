// Imports
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

// importing css styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
// importing icons
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// importing color scheme
import { shades } from "../../themes";
import { keyframes } from "@mui/material";
// *****************
// setting up keyframes for animation on icons
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;
//   function that pulls in images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);
// adding animations to the icons

const MainCarousel = () => {
  // gives screen value for screen size
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon
            sx={{
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(3)",
                color: "#cfe0e0",
              },
              "&:active": {
                animation: `${bounce} 1s ease`,
                // color: "black",
              },
              color: "#031414",
              fontSize: 40,
            }}
          />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon
            sx={{
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(3)",
                color: "#cfe0e0",
              },
              "&:active": {
                animation: `${bounce} 1s ease`,
                // color: "black",
              },
              color: "#031414",
              fontSize: 40,
            }}
          />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              // responsive css property
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography variant="h3" color={shades.secondary[200]}>
              New Items
            </Typography>
            <Typography color={shades.neutral[400]} variant="h2">
              Summer Sale
            </Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
              variant="h2"
            >
              Discover More
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};
export default MainCarousel;
