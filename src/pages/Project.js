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
        <Link className='cards__item__link' to={props.path}>
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
        </Link>
      </li>
    );

    return (
      <section data-aos="fade-up" className="project" id="project">
        <h2 className="section-title">Project</h2>
        <div className='cards__container'>
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
              src='images/img-9.jpg'
              text='E-commerce Web Application'
              label='WebApp'
              path='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              src='images/img-9.jpg'
              text='3D Racing Game'
              label='Game'
              path='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
                src='images/img-9.jpg'
                text='Connect 4 with AI'
                label='Game'
                path='/services'
              />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              src='images/img-9.jpg'
              text='Netflix Movies and TV Shows Prediction'
              label='Adventure'
              path='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              src='images/img-9.jpg'
              text='3D Racing Game'
              label='Game'
              path='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              src='images/img-9.jpg'
              text='3D Racing Game'
              label='Game'
              path='/services'
            />
          </SwiperSlide>
          {/* Add more SwiperSlides for additional projects */}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;