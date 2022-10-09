import type { NextPage } from "next";

import React  from "react";
import { Badge, Box } from "@chakra-ui/react";

const Community: NextPage = () => {

  return (
    <main>
      <div className="page-wrap grid grid-cols-5 mx-20">
       
        <div className="col-start-2 col-span-3">
        <p className="font-bold py-2 text-xl">See whats happening in Vegeverse community:</p>

          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" className="m-2">

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="green">
                  Thread
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  Conservation &bull; Agrotech
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Wild Boars Spotted in Paddy Farm #3
              </Box>

              <Box>
                How can we help the animals thrive in our community of farm land
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box as="span"  color="gray.600" fontSize="sm">
                34 comments
                </Box>
              </Box>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" className="m-2">

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="green">
                  Thread
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  Conservation &bull; Food Quality
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Crops have been attacked by pests
              </Box>

              <Box>
                How can we improve our crop yield without using pesticide
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box as="span"  color="gray.600" fontSize="sm">
                12 comments
                </Box>
              </Box>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" className="m-2">

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="blue">
                  News
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  Conservation &bull; Food Quality
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Great harvest from Paddy farm #14
              </Box>

              <Box>
                Come see the photos
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box as="span"  color="gray.600" fontSize="sm">
                62 reactions
                </Box>
              </Box>
            </Box>
          </Box>

        </div>
        <div>

        </div>
      </div>
    </main>
  );
};

export default Community;
