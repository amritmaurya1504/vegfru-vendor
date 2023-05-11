import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'


const Stores = () => {
    return (
        <>
            <div className='mb-12'>
                <div className="flex justify-between items-center mt-8">
                    <div>
                        <h3 className="text-4xl font-semibold mb-2">
                            Your <span className="text-green-500"> Stores</span>
                        </h3>
                        <div class="border-b-2 border-black mt-4 w-8"></div>
                    </div>
                    {/* <img src={oip} className="h-16 w-16" /> */}
                </div>
            </div>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton >
                            <Box className="text-gray-500 font-semibold" as="span" flex='1' textAlign='left'>
                                Anandpur Thana Area Store
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box className="text-gray-500 font-semibold" as="span" flex='1' textAlign='left'>
                                Ruby Area Store
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default Stores
