import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge,
} from "@chakra-ui/react";
import { Tooltip } from "react-tooltip";

const ProductList = () => {
  const [status, setStatus] = useState(true);

  return (
    <>
      <div className="px-5 md:px-24 py-8 rounded-lg">
        <div className="flex justify-between items-center mt-12">
          <div>
            <h3 className="text-4xl font-semibold mb-2">
              Product <span className="text-green-500"> List</span>
            </h3>
            <div class="border-b-2 border-black mt-4 w-8"></div>
          </div>
        </div>
        <div className="mt-10 bg-white">
          <TableContainer className="">
            <Table variant="simple">
              <TableCaption placement="top">
                List of all the products available in store
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>S No.</Th>
                  <Th>Product Name</Th>
                  <Th isNumeric>Price</Th>
                  <Th>Unit</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td isNumeric style={{ textAlign: "left" }}>
                    1
                  </Td>
                  <Td>Potato</Td>
                  <Td isNumeric>25</Td>
                  <Td> kg</Td>
                  <Td>
                    {" "}
                    {status ? (
                      <Badge
                        variant="outline"
                        colorScheme="green"
                        style={{ cursor: "pointer" }}
                        onClick={() => setStatus(!status)}
                        data-tooltip-id="change status"
                        data-tooltip-content="Click to change status"
                        data-tooltip-place="top"
                      >
                        Available
                        <Tooltip id="change status" />
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        colorScheme="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => setStatus(!status)}
                        data-tooltip-id="change status"
                        data-tooltip-content="Click to change status"
                        data-tooltip-place="top"
                      >
                        Out of Stock
                        <Tooltip id="change status" />
                      </Badge>
                    )}
                  </Td>
                </Tr>
                <Tr>
                  <Td isNumeric style={{ textAlign: "left" }}>
                    2
                  </Td>
                  <Td>Tomato</Td>
                  <Td isNumeric>15</Td>
                  <Td> kg</Td>
                  <Td>
                    {" "}
                    <Badge variant="outline" colorScheme="red">
                      Out of Stock
                    </Badge>
                  </Td>
                </Tr>
                <Tr>
                  <Td isNumeric style={{ textAlign: "left" }}>
                    3
                  </Td>
                  <Td>Potato</Td>
                  <Td isNumeric>25</Td>
                  <Td> kg</Td>
                  <Td>
                    {" "}
                    <Badge variant="outline" colorScheme="red">
                      Out of Stock
                    </Badge>
                  </Td>
                </Tr>
                <Tr>
                  <Td isNumeric style={{ textAlign: "left" }}>
                    4
                  </Td>
                  <Td>Potato</Td>
                  <Td isNumeric>25</Td>
                  <Td> kg</Td>
                  <Td>
                    <Badge variant="outline" colorScheme="green">
                      Available
                    </Badge>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default ProductList;
