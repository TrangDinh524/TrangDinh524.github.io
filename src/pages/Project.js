import React from 'react';
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';

function Project() {
    const CardItem = (props) => (
      <li className='cards__item'>
        <a 
          className='cards__item__link' 
          href={props.path} 
          target="_blank" 
          rel="noopener noreferrer"
        >          
        <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    );

    return (
      <section data-aos="fade-up" className="section project" id="project">
        <h2 className="section-title">Project</h2>
        <div className='cards__container container'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation={true}
        >
          <SwiperSlide>
            <CardItem
              src='images/prj_image.png'
              text='E-commerce Web Application'
              label='WebApp'
              path='https://github.com/TrangDinh524/E-commerce-WebApp'
              />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
                src='images/prj_image.png'
                text='Connect 4 with AI'
                label='Game'
                path='https://github.com/TrangDinh524/connect-4'
              />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              src='images/prj_image.png'
              text='3D Racing Game'
              label='Game'
              path='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              src='images/prj_image.png'
              text='Netflix Movies and TV Shows Prediction'
              label='DSA'
              path='/services'
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <CardItem
              src='images/prj_image.png'
              text='3D Racing Game'
              label='Game'
              path='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              src='images/prj_image.png'
              text='3D Racing Game'
              label='Game'
              path='/services'
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;