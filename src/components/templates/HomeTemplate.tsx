import { Card, Skeleton, Tabs } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getBannerListThunk, getMovieListThunk } from "store/quanLyPhim";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getCinemaListThunk } from "store/quanLyRap";

export const HomeTemplate = () => {
    const dispatch = useAppDispatch();
    const { movieList, isFetchinhMovieList, bannerList } = useSelector(
        (state: RootState) => state.quanLyPhim
    );
    const { cinemaList } = useSelector((state: RootState) => state.quanLyRap);
    console.log(cinemaList);

    useEffect(() => {
        dispatch(getMovieListThunk());
        dispatch(getBannerListThunk());
        dispatch(getCinemaListThunk());
    }, [dispatch]);

    if (isFetchinhMovieList) {
        return (
            <div className="grid grid-cols-4">
                {[...Array(12)].map(() => {
                    return (
                        <Card className="!w-[300px] !mt-20">
                            <Skeleton.Image className="!w-full !h-[250px]" />
                            <Skeleton.Input className="!w-full mt-16" />
                            <Skeleton.Input className="!w-full mt-16" />
                        </Card>
                    );
                })}
            </div>
        );
    }
    return (
        <div>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => {
                        /*..*/
                    }}
                >
                    {bannerList?.map((banner) => (
                        <SwiperSlide key={banner.maBanner}>
                            <img
                                className="w-full !p-0"
                                src={banner.hinhAnh}
                                alt=""
                            />{" "}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="p-11">
                <Tabs
                    tabPosition="top"
                    items={[
                        {
                            key: "MovieList",
                            label: "Danh sách phim",
                            children: (
                                <div className="grid grid-cols-5">
                                    {movieList?.map((movie) => (
                                        <div
                                            className="mt-30"
                                            key={movie.maPhim}
                                        >
                                            <Card
                                                key={movie?.maPhim}
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={
                                                    <img
                                                        style={{ height: 300 }}
                                                        alt="example"
                                                        src={movie?.hinhAnh}
                                                    />
                                                }
                                            >
                                                <Card.Meta
                                                    className="h-[120px]"
                                                    title={movie?.tenPhim}
                                                    description={`${movie?.moTa.substring(
                                                        0,
                                                        50
                                                    )}...`}
                                                />
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            ),
                        },
                        {
                            key: "NowShowing",
                            label: "Phim Đang Chiếu",
                            children: (
                                <div className="grid grid-cols-5">
                                    {movieList?.map((movie) =>
                                        movie.dangChieu ? (
                                            <div
                                                className="mt-30"
                                                key={movie.maPhim}
                                            >
                                                <Card
                                                    key={movie?.maPhim}
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={
                                                        <img
                                                            style={{
                                                                height: 300,
                                                            }}
                                                            alt="example"
                                                            src={movie?.hinhAnh}
                                                        />
                                                    }
                                                >
                                                    <Card.Meta
                                                        className="h-[120px]"
                                                        title={movie?.tenPhim}
                                                        description={`${movie?.moTa.substring(
                                                            0,
                                                            50
                                                        )}...`}
                                                    />
                                                </Card>
                                            </div>
                                        ) : undefined
                                    )}
                                </div>
                            ),
                        },
                        {
                            key: "UpComingMovie",
                            label: "Phim Sắp Chiếu",
                            children: (
                                <div className="grid grid-cols-5">
                                    {movieList?.map((movie) =>
                                        !movie.dangChieu ? (
                                            <div
                                                className="mt-30"
                                                key={movie.maPhim}
                                            >
                                                <Card
                                                    key={movie?.maPhim}
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={
                                                        <img
                                                            style={{
                                                                height: 300,
                                                            }}
                                                            alt="example"
                                                            src={movie?.hinhAnh}
                                                        />
                                                    }
                                                >
                                                    <Card.Meta
                                                        className="h-[120px]"
                                                        title={movie?.tenPhim}
                                                        description={`${movie?.moTa.substring(
                                                            0,
                                                            50
                                                        )}...`}
                                                    />
                                                </Card>
                                            </div>
                                        ) : undefined
                                    )}
                                </div>
                            ),
                        },
                    ]}
                />
            </div>
            <div>
                <Tabs
                    tabPosition="left"
                    items={[
                        {
                            key: "BHD",
                            label: (
                                <div>
                                    <img className="max-w-[80px]" src={cinemaList[0].logo} alt="" />
                                </div>
                            ),
                            children: <div></div>,
                        },
                        {
                            key: "CGV",
                            label: (
                                <div>
                                    <img className="max-w-[80px]" src={cinemaList[1].logo} alt="" />
                                </div>
                            ),
                            children: <div></div>,
                        },
                        {
                            key: "CineStar",
                            label: (
                                <div>
                                    <img className="max-w-[80px]" src={cinemaList[2].logo} alt="" />
                                </div>
                            ),
                            children: <div></div>,
                        },
                        {
                            key: "Galaxy",
                            label: (
                                <div>
                                    <img className="max-w-[80px]" src={cinemaList[3].logo} alt="" />
                                </div>
                            ),
                            children: <div></div>,
                        },
                        {
                            key: "Lotter Cinema",
                            label: (
                                <div>
                                    <img className="max-w-[80px]" src={cinemaList[4].logo} alt="" />
                                </div>
                            ),
                            children: <div></div>,
                        },
                        {
                            key: "MegaGS",
                            label: (
                                <div>
                                    <img className="max-w-[80px]" src={cinemaList[5].logo} alt="" />
                                </div>
                            ),
                            children: <div></div>,
                        },
                    ]}
                />
            </div>
        </div>
    );
};
