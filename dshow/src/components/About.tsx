import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '@/assets/img/brenda.png';



const About = () => {
  return (
    <>
      <div className='bg-white text-center rounded-xl p-20 mb-8'>
        <h1 className='text-3xl  text-black font-bold py-4'>Quien Soy | About Me</h1>
      </div>
        <main className='flex w-full flex-col items-center justify-center'>
            <Head>
                <title>Company | About</title>
                <meta name='description' content='any description' />
            </Head>
            <div className='grid w-4/5 grid-cols-8 gap-16 text-black'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-extrabold uppercase text-black'>Biography</h2>
                    <p className='my-4 font-medium'>
                        Como propietaria de un conjunto único que abarca un salón & spa, una boutique de moda y una línea de cosméticos, 
                        nos esforzamos por ofrecer un enfoque integral hacia la belleza consciente y sostenible.
                        Nuestra dedicación a la sostenibilidad se refleja en la elección cuidadosa de productos naturales y envases ecoamigables, 
                        contribuyendo así a un impacto positivo en nuestro entorno.
                    </p>

                    <p>
                        Valoramos profundamente la ética empresarial y nuestra conexión con la comunidad. 
                        Buscamos fomentar una visión de belleza inclusiva y responsable.
                    </p>

                    <br />
                    
                    <p>
                        Es un placer recibirte en nuestros espacios, donde cada detalle se selecciona con esmero para ofrecerte una experiencia enriquecedora. 
                        Estamos comprometidos a ser tu aliado en el viaje hacia la belleza consciente, ofreciendo calidad, 
                        calidez y un compromiso firme con la sostenibilidad en cada paso del camino.
                    </p>

                    {/* <p className=' my-4 font-medium'>
                        As the owner of a unique ensemble encompassing a salon & spa, a fashion boutique, and a line of cosmetics, we strive to offer a comprehensive approach 
                        to conscious and sustainable beauty. Our dedication to sustainability is reflected in the careful choice of natural products and eco-friendly packaging, 
                        contributing to a positive impact on our environment. We deeply value business ethics and our connection with the community. We aim to foster an inclusive 
                        and responsible vision of beauty. It's a pleasure to welcome you to our spaces, where each detail is curated to provide you with an enriching experience. 

                        We're committed to being your ally on the journey towards conscious beauty, offering quality, warmth, and a steadfast commitment to sustainability 
                        every step of the way.
                    </p> */}
                </div>
                <div className='col-span-3 relative z-15 h-max rounded-2xl border-2 border-solid border-black bg-light p-8'>
                    <div className='absolute  top-0.5 -left-0.5 z-0 w-[3%] h-[100%] rounded-[4rem] bg-black -right-10' />
                    <div className='relative z-10 p-8'>
                        <Image src={profilePic} alt="Owner" className='w-auto h-auto rounded-2xl' />
                    </div>
                </div>
            </div>
        </main>
    </>
  );
};

export default About;