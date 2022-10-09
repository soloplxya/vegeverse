import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  useColorModeValue,
  DrawerHeader,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuItem } from "./menu-item";
import ThemeToggleButton from "./theme-toggle-button";
import { AnimatePresence, motion } from "framer-motion";

export const Links = () => (
  <>
    <MenuItem name="Home" href="/" />
    <MenuItem name="Vote" href="/vote" />
    <MenuItem name="Propose" href="/propose" />
    <MenuItem name="Experience" href="/experience" />
    <MenuItem name="Community" href="/community" />
    <MenuItem name="Mission" href="/mission" />
  </>
);

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton onClick={onOpen} icon={<HamburgerIcon />} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerHeader />
          <DrawerContent>
            <DrawerCloseButton />
            <div className="p-2 pt-8">
              <ThemeToggleButton />
            </div>
            <Links />
          </DrawerContent>
        </Drawer>
      </motion.div>
    </AnimatePresence>
  );
};
