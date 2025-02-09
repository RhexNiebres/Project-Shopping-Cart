import sample from "../assets/sample.webp";

function About() {
  return (
    <div
      className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center px-8 text-white"
      style={{ backgroundImage: `url(${sample})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold text-white">About</h1>
        <div className="flex gap-5">
          <p className="flex-1 rounded-md bg-black bg-opacity-50 p-4">
            Welcome to ShopCart, your one-stop destination for a seamless and
            hassle-free shopping experience! At ShopCart, we believe that
            shopping should be simple, fast, and enjoyable. Whether you&apos;re
            looking for the latest gadgets, trendy fashion, or daily essentials,
            we&apos;ve got you covered. With a user-friendly interface and
            secure checkout, we make sure your shopping journey is smooth from
            start to finish.
            <br /> <br />
            <strong>Why Choose ShopCart?</strong>
            <br />
            ✅ Wide Selection – Discover thousands of products from trusted
            brands.
            <br />
            ✅ Fast & Secure Checkout – Your transactions are protected with the
            latest security measures.
            <br />
            ✅ Easy Navigation – Shop effortlessly with our intuitive design.
            <br />✅ Exclusive Deals – Enjoy discounts, promotions, and special
            offers.
          </p>

          <p className="flex-1 rounded-md bg-black bg-opacity-50 p-4">
            <strong>Our Mission</strong>
            <br />
            Our mission is to redefine online shopping by offering convenience,
            reliability, and unbeatable value. We are committed to providing
            top-notch service while ensuring a secure and satisfying experience
            for every customer.
            <br /> <br />
            <strong>Join the ShopCart Family!</strong>
            <br />
            Start shopping today and experience the difference. Whether you&apos;re
            buying for yourself or looking for the perfect gift, ShopCart is
            here to make your shopping experience better than ever!
            <br /> <br />
            📦 <strong>Shop Smart. Shop Fast. ShopCart.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
