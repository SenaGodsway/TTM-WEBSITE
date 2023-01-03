<?php include 'view/header.php' ?>
<link rel="stylesheet" href="css/construction.css">
<section id="header">
    <h3>construction</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus provident ratione accusantium numquam labore eligendi doloribus esse magni saepe? Quidem in ipsum laboriosam. Distinctio nesciunt vitae officiis voluptatum fugiat. </p>
</section>
<main>
    <header class="items-nav">
        <ul class="indicator">
            <li data-filter="all" class="active"> <a href="#">All</a></li>
            <li data-filter="Houses"> <a href="#">Houses</a></li>
            <li data-filter="Roads"> <a href="#">Roads</a></li>
            <li data-filter="Schools"> <a href="#">Schools</a></li>
        </ul>
    </header>
    <div class="gallery-imgs">
        <ul class="items">
            <li data-category="Houses"> 
                <img src="img/construction/estate1.jpg" alt="">
            </li>
            <li data-category="Schools"> 
                <img src="img/construction/estate2.jpg" alt="">
            </li>
            <li data-category="Roads"> 
                <img src="img/construction/road1.jpg" alt="">
            </li>
            <li data-category="Houses"> 
                <img src="img/construction/estate1.jpg" alt="">
            </li>
            <li data-category="Roads"> 
                <img src="img/construction/road3.jpg" alt="">
            </li>
        </ul>
    </div>
</main>
<?php include 'view/footer.php' ?>
