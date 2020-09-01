<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>HungDo - Website Hitech</title>
<!-- 	<meta name="description" content="Jirono - IT Solutions and Corporate template by tempload." />
	<meta name="keywords" content="Jirono, startup, saas, agency, development, html, template, tempload" />
	<meta name="author" content="tempload"/> -->

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="assets/images/favicon/favicon.png" />

	<!-- Bootstrap & Plugins CSS -->
	<link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css">
	<link href="assets/css/font-awesome.min.css" rel="stylesheet" type="text/css">

	<!-- Custom CSS -->
	<link href="assets/css/style.css" rel="stylesheet" type="text/css">

    <!-- Slick CSS -->
	<link rel="stylesheet" type="text/css" href="assets/slick/slick.css"/>
	<link rel="stylesheet" type="text/css" href="assets/slick/slick-theme.css"/>
</head>
<body>
  
	<!-- ***** Preloader Start ***** -->

	<div id="preloder">
		<div class="loader"></div>
	</div>
	<!-- ***** Preloader End ***** -->
	

	<!-- ***** Header Area Start ***** -->
      @include('layout.header')
	<!-- ***** Header Area End ***** -->


   <div id="content">
   	   @yield('content')
   </div>

	<!-- The Modal start -->
	    @include('layout.model_popup')
	<!-- The Modal END -->

	<!-- ***** Social Start ***** -->  
      @include('layout.social')
	<!-- ***** Social End  ***** -->
	
	<!-- ***** Footer Start ***** -->  
      @include('layout.footer')
	<!-- ***** Footer End ***** -->



	<!-- Link JS Start -->
      @include('layout.script')
    <!-- Link JS End -->
</body>
</html>