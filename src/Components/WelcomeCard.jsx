import { Link } from "react-router-dom";
const WelcomeCard = () => {
  const textData = [
    {
      id: 1,
      text: "📦 Wide Selection Discover thousands of products from trusted brands.",
    },

    {
      id: 2,
      text: " 📦 Fast & Secure Checkout Your transactions are protected with the latest security measures.",
    },

    {
      id: 3,
      text: "  📦 Easy Navigation Shop effortlessly with our intuitive design.",
    },

    {
      id: 4,
      text: " 📦 Exclusive Deals Enjoy discounts, promotions, and special offers.",
    },
  ];
  return (
    <div className="flex w-full items-center justify-center text-white">
      <div className="flex gap-4">
        <div className="flex w-96 flex-col gap-y-2 rounded-md border p-4 text-left text-black shadow-2xl">
          <h1 className="p-3 text-4xl font-bold text-orange-500">
            Welcome to Cartsy
          </h1>
          <p>
            your one-stop destination for a seamless and hassle-free shopping
            experience! At Cartsy, we believe that shopping should be simple,
            fast, and enjoyable.
          </p>
          <p>
            Whether you&apos;re looking for the latest gadgets, trendy fashion,
            or daily essentials, we&apos;ve got you covered. With a
            user-friendly interface and secure checkout, we make sure your
            shopping journey is smooth from start to finish.
          </p>
          <h1 className="text-2xl font-bold text-orange-500">
            Why Choose Cartsy?
          </h1>
          <div className="text rounded border-4 border-orange-400 p-3 font-semibold">
            <ul className="space-y-2">
              {textData.map((text) => (
                <li className="border-b border-orange-400" key={text.id}>
                  {text.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-96 flex-col gap-y-2 rounded-md border p-4 text-left text-black shadow-2xl">
          <h1 className="mb-4 w-full rounded bg-orange-500 p-2 text-center text-4xl font-extrabold text-white">
            Our Mission
          </h1>
          <div className="px-4 py-2">
            <p className="mb-4">
              Cartsy's mission is to redefine online shopping by offering
              convenience, reliability, and unbeatable value. We are committed
              to providing top-notch service while ensuring a secure and
              satisfying experience for every customer.
            </p>
            <h1 className="mb-2 text-2xl font-bold text-orange-500">
              Join the Cartsy Family!
            </h1>
            <p className="mb-3">
              Start shopping today and experience the difference. Whether
              you&apos;re buying for yourself or looking for the perfect gift,
              Cartsy is here to make your shopping experience better than ever!
            </p>
            <p>
              📦 <strong>Shop Smart. Shop Fast. enjoy life with Cartsy.</strong>
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/shop"
              className="mt-4 w-60 rounded bg-orange-500 p-2 text-center font-semibold text-white shadow-2xl transition-transform duration-200 hover:scale-110 hover:text-black"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
