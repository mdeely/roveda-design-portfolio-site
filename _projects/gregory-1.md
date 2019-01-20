---
layout: project
title:  Gregory I
banner_image: "/assets/img/Gregory_1_After-003.jpg"
description: "Lorem ipsum dolor sit amet, vix oporteat antiopam at, vel paulo signiferumque eu. Et eam petentium salutandi, nam atqui officiis cu. No duo tantas voluptatum, nam no tempor deseruisse, an fabulas laoreet adipisci eam. Qui in scripta ceteros disputando, an hendrerit definiebas quaerendum nec."
---

<div class="carousel__container">
	<a href="#" class="carousel__previous">prev</a>
	<ul class="carousel__list">
			<li class="carousel__slide">
				<div class="carousel__content">
					{% include image-comparison.html before-image="img-original.jpg"  after-image="img-modified.jpg" %}
				</div>	
			</li>
		{% for slide in site.projects %}
			<li class="carousel__slide {{forloop.index}}">
				<div class="carousel__content">
					<img src="{{slide.banner_image}}">
				</div>
			</li>
		{% endfor %}
	</ul>
	<a href="#" class="carousel__next">next</a>
</div>
<br>
<br>

<br>

<br>

<br>

<br>
