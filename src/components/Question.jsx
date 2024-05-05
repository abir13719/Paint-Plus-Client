const Question = () => {
  return (
    <div className="p-4">
      <div className="join join-vertical w-full  bg-gradient-to-r from-pink-500 to-orange-500">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What types of paint does the website offer?
          </div>
          <div className="collapse-content">
            <p>
              The website offers a variety of paint types including acrylic, watercolor, oil,
              digital, graffiti, mixed media, and abstract paint.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Are the paintings customizable?</div>
          <div className="collapse-content">
            <p>
              Yes, some paintings offer customization options allowing customers to request
              personalized touches or variations.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How long does it take to process and ship an order?
          </div>
          <div className="collapse-content">
            <p>
              Processing and shipping times vary depending on the specific product and customization
              requests. Typically, orders are processed within 1-3 business days, with shipping
              times varying based on location.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can customers request commissioned artwork?
          </div>
          <div className="collapse-content">
            <p>
              Yes, customers can inquire about commissioned artwork by contacting the artists
              directly through the website.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are the paintings handcrafted or digitally created?
          </div>
          <div className="collapse-content">
            <p>
              The website offers a mix of handcrafted paintings and digitally created artwork. Each
              product listing specifies the creation process.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">What is the return policy?</div>
          <div className="collapse-content">
            <p>
              The website offers a return policy allowing customers to return products within a
              specified period if they are not satisfied with their purchase. Details about the
              return process are available on the website.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are the paintings available for international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Yes, the website offers international shipping for most products. Shipping rates and
              delivery times may vary depending on the destination.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can customers leave reviews and ratings for products?
          </div>
          <div className="collapse-content">
            <p>
              Yes, customers can leave reviews and ratings for products they have purchased. These
              reviews help other customers make informed decisions.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are there any special promotions or discounts available?
          </div>
          <div className="collapse-content">
            <p>
              The website occasionally offers special promotions, discounts, or sales events.
              Customers can sign up for the newsletter or follow the websites social media channels
              to stay updated on any offers.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How can customers contact customer support?
          </div>
          <div className="collapse-content">
            <p>
              Customers can contact customer support through the websites contact form, email, or
              phone number provided on the website. Additionally, there may be a live chat option
              for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
