import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../themes";
import { setIsCartOpen } from "../../state";
import { keyframes } from "@mui/system";
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

const Navbar = () => {
  // declaring useNavigate() as a variable
  const navigate = useNavigate();
  // declaring useDispatch() as a variable
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor={shades.secondary[700]}
      // color="#d5d7d6"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            transition: "transform 0.3s ease, color 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              color: "cfe0e0",
            },
            "&:active": {
              animation: `${bounce} 1s ease`,
            },
          }}
          // assigning color
          color={shades.secondary[100]}
          variant="h3"
        >
          AnarchTee's Logo Here
        </Box>
        {/* icons box */}
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="4"
        >
          <IconButton
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
              color: "#70a2a3",
            }}
          >
            <SearchOutlined />
          </IconButton>
          <IconButton
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
              color: "#70a2a3",
            }}
          >
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="#f7efe8"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
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
                color: "#70a2a3",
              }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton
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
              color: "#70a2a3",
            }}
          >
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
