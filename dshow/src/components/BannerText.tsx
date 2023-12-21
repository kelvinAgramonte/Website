import Container from "./Container"
import { motion } from "framer-motion"
import Link from "next/link";

interface Props{
    title: string;
}

export const CosmeticBannerText = ({title}: Props) => {
  return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <Container className="flex h-full flex-col gap-y-6 justify-center -mt-20">
        <motion.h2 
            initial={{ y: 30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="text-7xl font-bold text-white"
        >
            {title}
        </motion.h2>
        <motion.p
            initial={{ y: 40, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }} 
            className="text-lg text-slate-100"
        >
            Stock up on sportswear and limited edition collections on <br /> awedsome mid-season sale.
        </motion.p>
        <motion.div
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.7 }} 
            className="flex gap-x-4 mt-2"
        >
            <Link href="/cosmetics">
            <button className="py-3 px-6 border-double border-4 border-white-600 hover:bg-white hover:text-dark duration-200 text-sm uppercase font-semibold">
                Find out
            </button>
            </Link>

            <button className="py-3 px-6 border-double border-4 border-white-600 hover:bg-white hover:text-dark duration-200 text-sm uppercase font-semibold">
                Shop Now
            </button>
        </motion.div>
      </Container>
    </div>
  );
};

export const ClothesBannerText = ({title}: Props) => {
    return (
      <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
        <Container className="flex h-full flex-col gap-y-6 justify-center -mt-20">
          <motion.h2 
              initial={{ y: 30, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5 }} 
              className="text-7xl font-bold text-white"
          >
              {title}
          </motion.h2>
          <motion.p
              initial={{ y: 40, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="text-lg text-slate-100"
          >
              Stock up on sportswear and limited edition collections on <br /> awedsome mid-season sale.
          </motion.p>
          <motion.div
              initial={{ y: 50, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.7 }} 
              className="flex gap-x-4 mt-2"
          >
              
            <Link href="/clothes">
                <button className="py-3 px-6 border-double border-4 border-white-600 hover:bg-white hover:text-dark duration-200 text-sm uppercase font-semibold">
                    Find out
                </button>
            </Link>
              <button className="py-3 px-6 border-double border-4 border-white-600 hover:bg-white hover:text-dark duration-200 text-sm uppercase font-semibold">
                  Shop Now
              </button>
          </motion.div>
        </Container>
      </div>
    );
  };

export const SalonBannerText = ({title}: Props) => {
    return (
      <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
        <Container className="flex h-full flex-col gap-y-6 justify-center -mt-20"> {/* Adjust the margin-top (mt) value */}
          <motion.h2 
              initial={{ y: 30, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5 }} 
              className="text-7xl font-bold text-black"
          >
              {title}
          </motion.h2>
          <motion.p
              initial={{ y: 40, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="text-lg text-black"
          >
              Stock up on sportswear and limited edition collections on <br /> awedsome mid-season sale.
          </motion.p>
          <motion.div
              initial={{ y: 50, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.7 }} 
              className="flex gap-x-4 mt-2"
          >
              <button className="py-3 px-6 border-double border-4 border-black-600 hover:bg-black hover:text-white duration-200 text-sm uppercase font-semibold">
                  Styles
              </button>
              <button className="py-3 px-6 border-double border-4 border-black-600 hover:bg-black hover:text-white duration-200 text-sm uppercase font-semibold">
                  Appointment
              </button>
          </motion.div>
        </Container>
      </div>
    );
  };

  