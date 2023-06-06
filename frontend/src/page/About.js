import React from 'react';

const About = () => {
  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px'
  };

  return (
    <div className="about-section">
      <h2>About Our Grocery Store</h2>
      <div style={mapStyle}>
        <iframe
          title="Grocery Store Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.8639743783795!2d-86.25780294963205!3d41.6952876393264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ce9d791d96fb29e!2sGrocery%20Store!5e0!3m2!1sen!2sus!4v1650803788254!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p style={paragraphStyle}>
        Welcome to our grocery store, where we strive to provide the highest quality products and excellent customer service.
      </p>
      <p style={paragraphStyle}>
        Our store has been in business for over 20 years, and we have built a reputation for offering fresh and locally-sourced produce, as well as a wide selection of international foods and specialty items. We take pride in our selection of organic produce and fresh meats, which we source from local farms and ranches.
      </p>
      <p style={paragraphStyle}>
        Our loyalty program allows customers to earn points for every purchase, which can be redeemed for discounts or free items. We also offer a range of cooking classes and workshops, taught by expert chefs and culinary professionals, to help customers develop their skills and techniques in the kitchen.
      </p>
      <p style={paragraphStyle}>
        In addition to groceries, our store features a bakery, deli, and prepared foods section, offering a variety of delicious and healthy options for breakfast, lunch, and dinner.
      </p>
      <p style={paragraphStyle}>
        We are committed to sustainability and reducing waste. We offer compostable and recyclable packaging options, and we work with local organizations to donate excess food to those in need. We regularly host community events and fundraisers, and support local schools and charities through donations and sponsorships.
      </p>
      <p style={paragraphStyle}>
        Our online ordering system allows customers to shop from home, with same-day pickup or delivery options available. We are open 7 days a week, with extended hours on weekends and holidays. Our knowledgeable and friendly staff are always available to help customers find what they're looking for or offer advice on meal planning and cooking.
      </p>
      <p style={paragraphStyle}>
        Thank you for choosing our grocery store, and we look forward to serving you soon!
      </p>
    </div>
  );
};

const mapStyle = {
  marginBottom: '20px',
};

export default About;
