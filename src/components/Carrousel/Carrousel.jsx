import React, { useState } from "react";
import left from "../../assets/chevron-left_ .svg";
import right from "../../assets/chevron-right_.svg";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0); // Définition de l'index du premier slide à 0
	const length = slides.length; 

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // Retourne au premier slide lorsqu'on arrive au dernier
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // Retourne au dernier slide lorsqu'on est au premier
	};

	return (
		<section id="carrousel-container">
			{length > 1 && (
				<img
					src={left} // Flèches seulement si length > 1
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} // Mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
					className={
						current === index
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="projet réalisé" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}