// ============================================================
// HELP WIDGET — Searchable knowledge base drawer
// ============================================================

var HelpWidget = {
  helpData: [
    // ---- PRODUCT KNOWLEDGE ----
    {
      category: "Product Knowledge",
      items: [
        {
          question: "What's the difference between 6ft and 8ft fence?",
          answer: "6ft panels are the standard for most construction sites, events, and general perimeter security. 8ft panels provide extra height for high-security sites, better wind resistance (heavier gauge), and are recommended when OSHA compliance or maximum privacy is needed. 8ft panels cost $1/LF more than 6ft."
        },
        {
          question: "What are sandbags for? How many do I need?",
          answer: "Sandbags are used for above-ground installations to keep the fence stable, especially in windy areas. They're placed at the base of each panel. Without privacy screen: 0\u20131 per panel (6ft) or 1\u20132 per panel (8ft). With privacy screen (more wind load): 1\u20132 per panel (6ft) or 2\u20134 per panel (8ft). They cost $7.95 each and are a one-time purchase (taxable)."
        },
        {
          question: "What is a privacy screen?",
          answer: "Privacy screen is a green mesh fabric that attaches to the fence panels. It blocks visibility (about 85% opacity), contains dust and debris on construction sites, and gives a professional appearance. It's a one-time purchase \u2014 the customer keeps it after the rental ends. Priced per linear foot: $3/LF for 6ft, $4/LF for 8ft."
        },
        {
          question: "What's the difference between above-ground and in-ground?",
          answer: "Above-ground: Panels sit on stands/bases held down by sandbags. Quick to install and remove. Best for temporary needs and when the surface can't be drilled. In-ground: Posts are driven or drilled into the ground (2 posts per panel at $20 each). More secure and wind-resistant. Concrete surfaces require drilling ($1.50/LF surcharge). Requires Dig Alert (811) notification."
        },
        {
          question: "What are barricades used for?",
          answer: "Traffic barricades are 7.5 ft long and 3.5 ft tall. They're used for road closures, directing traffic, crowd control at events, construction zone perimeters, and parking lot management. Priced at $15 per barricade per month with no minimum term (but $950 minimum order still applies)."
        },
        {
          question: "What gate options are available?",
          answer: "Vehicle Gate (Standard): $125 \u2014 10ft or 12ft wide, good for trucks and standard vehicles. Vehicle Gate (Double-Wide): $175 \u2014 20ft wide, needed for heavy construction equipment. Pedestrian Gate: $75 \u2014 for foot traffic. All vehicle gates come with a wheel at no extra charge."
        },
        {
          question: "What fence panels are available for purchase?",
          answer: "8\u00D710 Panel ($120), 8\u00D710 w/ Ped Gate ($150), 6\u00D710 Panel ($105), 6\u00D710 w/ Ped Gate ($135), Fence Base/Stand ($20), Fence Clamp ($3), Post ($45), 6\u00D750 Green Screen ($50), 8\u00D750 Green Screen ($58). All purchase items are subject to 9.5% sales tax."
        }
      ]
    },
    // ---- PRICING & POLICY ----
    {
      category: "Pricing & Policy",
      items: [
        {
          question: "What's the $950 minimum? Why?",
          answer: "The $950 minimum covers the full cost of delivery, professional installation, and removal for the 6-month rental term. If the calculated total (rental charges + delivery + any taxable purchases) is less than $950, an 'Install & Removal Fee' is added to bring the total up to $950. This ensures we can provide full-service setup and takedown on every job."
        },
        {
          question: "How do extensions work (16% per month)?",
          answer: "The standard rental term is 6 months. After that, each additional month costs 16% of the rental charges (non-taxable items like fence, surcharges, posts, gates, delivery, and Install & Removal Fee). There's a minimum monthly extension of $94.35. A 12-month commitment gets 1 free month of extension. Extensions are billed on a 28-day cycle."
        },
        {
          question: "What's the Install & Removal Fee?",
          answer: "The Install & Removal Fee is a line item that appears when the calculated rental total is below the $950 minimum. It's the difference between your actual charges and $950. For example, if your fence + delivery = $700, the I&R Fee would be $250 to reach the $950 minimum. This covers professional installation and removal service."
        },
        {
          question: "How is delivery calculated?",
          answer: "Rentals: Free delivery within 30 miles of Sylmar (91342). Beyond 30 miles, it's $9 per mile for the overage only. Purchases: $9 per mile for the full distance. Orders over $5,000 get free delivery within 60 miles."
        },
        {
          question: "What's the free delivery radius?",
          answer: "For rentals, delivery is free within 30 miles of our Sylmar, CA (91342) location. For purchases, free delivery is available within 60 miles for orders over $5,000. Miles are calculated using straight-line distance with a 1.3x road factor."
        },
        {
          question: "What about damage charges?",
          answer: "Normal wear and tear during the rental period is covered. If panels are damaged beyond normal use (vehicle impact, vandalism, etc.), the customer may be charged for replacement. Our crew will assess and document any damage during removal."
        },
        {
          question: "What volume discounts are available for purchases?",
          answer: "Purchase orders automatically receive volume discounts: 10% off at $3,000+, 15% off at $6,000+, 20% off at $10,000+. These apply to the subtotal before tax and delivery."
        },
        {
          question: "How does barricade pricing work?",
          answer: "Barricades are $15 per unit per month. Each barricade is 7.5 ft long. We calculate how many you need based on your linear footage (rounded up). Monthly pricing from 1 to 12 months \u2014 no automatic 6-month term. The $950 minimum (Install & Removal Fee) still applies."
        }
      ]
    },
    // ---- OBJECTION HANDLING ----
    {
      category: "Objection Handling",
      items: [
        {
          question: "\"That's too expensive\"",
          answer: "I understand budget is important. Keep in mind our pricing includes delivery, professional installation, and removal \u2014 all included in the price. The $950 minimum covers the full 6-month term, which comes out to less than $160/month. We're the most responsive company in the valley with same-day service for any issues. Many customers find our all-inclusive pricing actually saves them money compared to companies with hidden fees."
        },
        {
          question: "\"I need to think about it\"",
          answer: "Of course! Would you like me to email the estimate so you have it handy? Our pricing is subject to change, but we'd love to help when you're ready. If you have any other questions later, don't hesitate to call back. We're here Monday through Saturday."
        },
        {
          question: "\"Your competitor is cheaper\"",
          answer: "That's smart to compare. Here's what sets us apart: We're locally owned in Sylmar, our pricing is 100% transparent with no hidden fees or surprise charges, we offer same-day service for any issues, and our team handles everything from delivery to removal. Many customers come back to us after trying other companies because of our reliability and service quality."
        },
        {
          question: "\"I just need it for a few days\"",
          answer: "I understand. Our minimum rental term is 6 months with a $950 minimum, but that covers everything \u2014 delivery, professional installation, the rental itself, and removal. Even for short projects, this is the best value because you're getting full-service setup and takedown. There are no hidden fees or early termination charges."
        },
        {
          question: "\"Can I install it myself?\"",
          answer: "For rentals, we handle all installation and removal \u2014 it's part of the service and ensures the fence is properly secured for safety. If you'd like to own the fence panels outright, you can purchase them and install yourself. We sell all the supplies: panels, bases, clamps, posts, and screens."
        },
        {
          question: "\"I'll call you back\"",
          answer: "Absolutely! Can I get your name and number so I can follow up if we don't hear from you? I'll also email the estimate so you have all the details. Is there anything else I can answer before we hang up?"
        },
        {
          question: "\"Can you match another quote?\"",
          answer: "While we don't do formal price matching, I'd be happy to review your other quote to see how they compare. Often, other companies have hidden fees for things we include \u2014 like installation, removal, or delivery. Our all-inclusive pricing means no surprises."
        }
      ]
    }
  ],

  init: function () {
    this.render(this.helpData);
  },

  render: function (data) {
    var el = document.getElementById("help-content");
    var html = "";

    data.forEach(function (cat) {
      html += '<div class="help-category">';
      html += '<div class="help-category-title">' + cat.category + '</div>';
      cat.items.forEach(function (item, idx) {
        html += '<div class="help-item" data-search="' + (item.question + " " + item.answer).toLowerCase() + '">';
        html += '<button class="help-item-question" onclick="HelpWidget.toggleItem(this)">' + item.question + '</button>';
        html += '<div class="help-item-answer">' + item.answer + '</div>';
        html += '</div>';
      });
      html += '</div>';
    });

    el.innerHTML = html;
  },

  toggle: function () {
    var drawer = document.getElementById("help-drawer");
    var overlay = document.getElementById("help-overlay");
    var isOpen = drawer.classList.contains("open");

    if (isOpen) {
      this.close();
    } else {
      drawer.classList.add("open");
      overlay.classList.add("show");
      document.getElementById("help-search-input").focus();
    }
  },

  close: function () {
    document.getElementById("help-drawer").classList.remove("open");
    document.getElementById("help-overlay").classList.remove("show");
  },

  toggleItem: function (btn) {
    var item = btn.parentElement;
    item.classList.toggle("open");
  },

  search: function (query) {
    var q = query.toLowerCase().trim();
    var items = document.querySelectorAll(".help-item");
    var categories = document.querySelectorAll(".help-category");

    if (!q) {
      items.forEach(function (item) { item.style.display = ""; });
      categories.forEach(function (cat) { cat.style.display = ""; });
      return;
    }

    items.forEach(function (item) {
      var searchText = item.getAttribute("data-search");
      if (searchText.indexOf(q) !== -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });

    // Hide categories with no visible items
    categories.forEach(function (cat) {
      var visibleItems = cat.querySelectorAll('.help-item:not([style*="display: none"])');
      cat.style.display = visibleItems.length > 0 ? "" : "none";
    });
  }
};
