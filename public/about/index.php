<?php $page = array(
    'title' => 'About me'
); ?>

<?php include '../.includes/page-header.php'; ?>

<div style="text-align:center">
    <img width="50%" style="max-width: 256px" src="/.assets/img/avatar.jpeg"
        alt="An university-age chap in a very colourful room" class="img-avatar">
</div>
<p>Hiya! My name is Raresh (also written as <i>Rareș</i>). I'm working towards a Bachelor of Engineering at
    Victora University of Wellington in well... Wellington.</p>
<p>I'm interested in various curious things, like technology (mostly making stuff myself), photos, design,
    language and the odd thing.</p>

<h1 id="get-in-touch">Get in touch</h1>
<p>Online, I refer to myself under the monicker of <code>thegreatrazz</code>. As with most people of my age, I'm on <a href="https://twitter.com/thegreatrazz">Twitter</a>.</p>

<h1>About this website</h1>
<p>This website is written in plain HTML, CSS and JavaScript. Hosted on a $5/month DigitalOcean droplet.</p>
<p>I aim for it to be compatible with modern web standards available in mainstream Firefox and Chrome
    builds.
    Older web browsers can have the pleasure of reading the <del>now defunct</del> text version.</p>
<p>The website code (and configuration files I'm comfortable sharing) are on
    <a href="https://github.com/thegreatrazz/website">GitHub</a> for your enjoyment.</p>

<h2>Typefaces</h2>
<p>This website uses <a href="https://rsms.me/inter/">Inter</a> by Rasmus Andersson and
    <a href="https://adobe-fonts.github.io/source-code-pro/">Source Code Pro</a> by Adobe.</p>

<blockquote style="font-family: 'Inter', sans-serif; font-style: normal">
    <h4>Inter</h4>
    <p>
        The Quick Brown Fox Jumped Over The Lazy Dog<br>
        <i>The Quick Brown Fox Jumped Over The Lazy Dog</i><br>
        <b>The Quick Brown Fox Jumped Over The Lazy Dog</b><br>
        <b><i>The Quick Brown Fox Jumped Over The Lazy Dog</i></b>
    </p>
</blockquote>

<blockquote style="font-family: 'Source Code Pro', monospace; font-style: normal">
    <h4 style="font-style: unset;">Source Code Pro</h4>
    <p>
        int factorial(int x) => x >= 1 ? factorial(x - 1) : 1<br>
        <b>int factorial(int x) => x >= 1 ? factorial(x - 1) : 1</b>
    </p>
</blockquote>

<?php include '../.includes/page-footer.php'; ?>
