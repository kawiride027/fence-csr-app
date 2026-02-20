// ============================================================
// SCRIPT DATA — All call scripts, tips, objections per step
// ============================================================

var SCRIPT_DATA = {

  // =========================================================
  // FENCE RENTAL SCRIPTS
  // =========================================================
  "fence-rental": {
    intro: {
      say: "Great, I can help you with temporary fencing! Let me get some details so I can put together an estimate for you.",
      ask: "What's the project? Construction site, event, pool area, residential?",
      tips: [
        "If they already know what they need, jump right into the questions",
        "Establish rapport \u2014 ask about the project to understand their needs"
      ]
    },
    coverage: {
      say: "Do you have an idea of how many linear feet of fencing you'll need?",
      ask: "Can you describe the area you need fenced? What shape is it?",
      tips: [
        "If they don't know the footage, ask them to describe the area or send a Google Maps screenshot",
        "A standard residential lot is usually 100\u2013150 ft of perimeter",
        "Construction sites are typically 200\u2013500 LF",
        "Our panels are 10 ft wide, so we round up to the nearest 10",
        "For a rough square: side length \u00D7 4 = perimeter"
      ]
    },
    height: {
      say: "We offer 6-foot and 8-foot panels. Which height works best for your project?",
      ask: "Is security or visibility a concern?",
      tips: [
        "6 ft is the standard for most construction sites and events",
        "8 ft is recommended for high-security sites, OSHA compliance, or if they want more privacy",
        "8 ft panels are $1/LF more than 6 ft",
        "If they're unsure, 6 ft is a safe default for most projects"
      ]
    },
    surface: {
      say: "What type of surface will the fence be installed on?",
      ask: "Is it mostly dirt, concrete, asphalt, or a mix?",
      tips: [
        "Dirt = easiest install, posts can go directly in the ground",
        "Concrete requires drilling if they want in-ground \u2014 mention the $1.50/LF surcharge",
        "Above-ground with sandbags is quicker to install and remove",
        "In-ground is more secure but costs more (posts at $20 each, 2 per panel)",
        "For asphalt, in-ground drilling is possible but above-ground is more common"
      ]
    },
    privacy: {
      say: "Would you like privacy screening on the fence? It's a green mesh that attaches to the panels.",
      ask: "Do you need to block visibility or contain dust and debris?",
      tips: [
        "Privacy screen is a one-time purchase (taxable), not a rental item",
        "6 ft screen: $3.00/LF | 8 ft screen: $4.00/LF",
        "Great for construction sites to contain dust and block sightlines",
        "Screen color is green to match the panels"
      ],
      objections: [
        { trigger: "Is the screen necessary?", response: "It's optional, but many job sites require it for dust control and OSHA compliance. It also gives a professional look to the site." }
      ]
    },
    gates: {
      say: "Will you need any gates for vehicle or pedestrian access?",
      ask: "How will workers and vehicles enter the fenced area?",
      tips: [
        "Most job sites need at least one vehicle gate for equipment access",
        "Vehicle gates come with a wheel \u2014 no extra charge",
        "Standard gate: $125 (10ft or 12ft wide) \u2014 good for trucks",
        "Double-wide: $175 (20ft wide) \u2014 needed for heavy equipment access",
        "Pedestrian gate: $75 \u2014 for foot traffic separate from vehicle entrance"
      ],
      objections: [
        { trigger: "Do I need a gate?", response: "If vehicles need access to the site, you'll definitely want at least a vehicle gate. Without one, you'd have to remove and reinstall panels every time. The standard 10-foot gate works for most trucks." }
      ]
    },
    sandbags: {
      say: "For above-ground installation, we recommend sandbags to keep the fence stable, especially in windy areas.",
      ask: "Is the site in an area that gets windy?",
      tips: [
        "Sandbags are $7.95 each (one-time purchase, taxable)",
        "The system auto-calculates a recommendation based on height and privacy screen",
        "With privacy screen = more wind load = more sandbags needed",
        "Without screen: 0\u20131 per panel (6ft), 1\u20132 per panel (8ft)",
        "With screen: 1\u20132 per panel (6ft), 2\u20134 per panel (8ft)",
        "Sandbags NOT needed for in-ground installations"
      ]
    },
    duration: {
      say: "How long do you think you'll need the fence? Our standard rental term is up to 6 months.",
      ask: "What's the timeline for your project?",
      tips: [
        "Standard term: up to 6 months \u2014 this is one flat price",
        "Extensions beyond 6 months: 16% of rental charges per month (min $94.35/mo)",
        "12-month commitment: get 1 month free on extensions",
        "If they're unsure, the 6-month standard is the safest bet",
        "Many construction projects run 3\u20136 months"
      ]
    },
    delivery: {
      say: "What's the zip code for the job site? I'll calculate the delivery charge.",
      ask: "What's the delivery address?",
      tips: [
        "Free delivery within 30 miles of Sylmar (91342)",
        "Beyond 30 miles: $9 per mile for the overage",
        "We service most of Southern California, Arizona, Nevada, Oregon, and Utah"
      ]
    },
    closing: {
      say: "Based on what we've discussed, here's what the estimate looks like. Let me walk you through the numbers.",
      ask: "Would you like me to email this estimate to you?",
      tips: [
        "Walk through each line item so the customer understands the pricing",
        "Mention the Install & Removal Fee if applicable \u2014 explain it's part of the $950 minimum",
        "Point out the extension rate so there are no surprises later",
        "Offer to save the PDF and email it to them"
      ],
      objections: [
        { trigger: "That's too expensive", response: "I understand budget is important. Keep in mind this includes delivery, professional installation, and removal. Our $950 minimum covers the full 6-month term, which comes out to less than $160 per month. We're also the most responsive company in the valley \u2014 same-day service for any issues." },
        { trigger: "I need to think about it", response: "Of course! Would you like me to email the estimate so you have it handy? Pricing is subject to change, but we'd love to help when you're ready." },
        { trigger: "Comparing prices", response: "That's smart to shop around. What I can tell you is we're locally owned here in Sylmar, our pricing is transparent with no hidden fees, and we offer same-day service for any issues. Many customers come back to us after comparing." },
        { trigger: "Just need it for a few days", response: "I understand. Our minimum rental term is 6 months with a $950 minimum, which covers delivery, install, and removal. Even for short projects, this is the best value because you get professional setup and takedown included." }
      ]
    }
  },

  // =========================================================
  // BARRICADE RENTAL SCRIPTS
  // =========================================================
  "barricade-rental": {
    intro: {
      say: "I can help you with barricade rentals! Let me get some details to put together a quote.",
      ask: "What's the barricades for? Road work, event, crowd control?",
      tips: [
        "Barricades are 7.5 ft long and 3.5 ft tall",
        "Priced at $15 per barricade per month",
        "No minimum term \u2014 monthly pricing from 1 to 12 months"
      ]
    },
    coverage: {
      say: "How many linear feet of barricade coverage do you need?",
      ask: "Can you describe the area that needs barricades?",
      tips: [
        "Each barricade is 7.5 ft long \u2014 we'll calculate how many are needed",
        "Round up to ensure full coverage",
        "Common uses: road closures, event perimeters, construction zones",
        "Example: 100 LF = 14 barricades"
      ]
    },
    duration: {
      say: "How long will you need the barricades?",
      ask: "Is this a one-time event or an ongoing project?",
      tips: [
        "Monthly pricing \u2014 no 6-month auto-commitment like fencing",
        "Price is per barricade per month",
        "$950 minimum still applies (Install & Removal Fee if under)"
      ]
    },
    delivery: {
      say: "What's the delivery zip code?",
      ask: "Where are the barricades going?",
      tips: [
        "Same delivery pricing as fence rentals",
        "Free within 30 miles of Sylmar",
        "$9/mile beyond 30 miles"
      ]
    },
    closing: {
      say: "Here's your barricade estimate. Let me break down the numbers for you.",
      ask: "Would you like me to send this estimate to your email?",
      tips: [
        "Walk through the per-barricade cost and total",
        "Mention the $950 minimum if the Install & Removal Fee kicked in",
        "Offer PDF via email"
      ],
      objections: [
        { trigger: "That's too expensive", response: "I understand. The $950 minimum covers delivery, setup, and removal. For larger orders, the per-barricade cost is very competitive at $15 each per month." },
        { trigger: "I just need them for one day", response: "The minimum rental is one month at $15 per barricade, with a $950 minimum including delivery and setup. Even for short events, this covers everything \u2014 drop-off, placement, and pickup." }
      ]
    }
  },

  // =========================================================
  // FENCE PURCHASE SCRIPTS
  // =========================================================
  "fence-purchase": {
    intro: {
      say: "I can help you with purchasing fence panels and supplies! What are you looking for?",
      ask: "Are you looking for panels, bases, screens, or a combination?",
      tips: [
        "Purchases are separate from rentals \u2014 customer keeps the product",
        "All items are taxable (9.5% sales tax)",
        "Volume discounts: 10% at $3,000 | 15% at $6,000 | 20% at $10,000"
      ]
    },
    products: {
      say: "Let me go through our products and quantities with you.",
      ask: "How many of each item do you need?",
      tips: [
        "8\u00D710 Panel: $120 \u2014 standard full-height panel",
        "8\u00D710 Panel w/ Pedestrian Gate: $150 \u2014 panel with built-in gate",
        "6\u00D710 Panel: $105 \u2014 shorter height option",
        "6\u00D710 Panel w/ Pedestrian Gate: $135",
        "Fence Base/Stand: $20 \u2014 needed for above-ground mounting",
        "Fence Clamp: $3 \u2014 connects panels together",
        "Purchasing Post: $45 \u2014 for in-ground installation",
        "Green Screens: 6\u00D750 = $50, 8\u00D750 = $58 \u2014 privacy screening"
      ],
      objections: [
        { trigger: "Can I install it myself?", response: "Absolutely! Our panels are designed for easy setup. You'll need bases or posts depending on your surface, and clamps to connect panels together. We can walk you through what you need." }
      ]
    },
    delivery: {
      say: "Would you like the items delivered, or will you pick them up at our Sylmar location?",
      ask: "What's your delivery address?",
      tips: [
        "Delivery is $9/mile for the full distance",
        "Orders over $5,000 get free delivery within 60 miles",
        "Will-call pickup is free from our Sylmar yard"
      ]
    },
    closing: {
      say: "Here's your purchase estimate. Let me walk you through the totals.",
      ask: "Would you like to proceed with this order?",
      tips: [
        "Point out any volume discount that applies or how close they are to the next tier",
        "Mention free delivery threshold if they're close to $5,000",
        "Offer to email the PDF estimate"
      ],
      objections: [
        { trigger: "Can I get a discount?", response: "We offer volume discounts automatically: 10% off orders over $3,000, 15% off over $6,000, and 20% off over $10,000. Let me see if adding a few more items would push you into the next discount tier." }
      ]
    }
  },

  // =========================================================
  // ISSUE SCRIPTS
  // =========================================================
  "issue": {
    intro: {
      say: "I'm sorry to hear you're having an issue. Let me get some details so we can take care of this quickly.",
      ask: "Can you tell me what's happening with the fence?",
      tips: [
        "Start with empathy \u2014 acknowledge the inconvenience",
        "Get the customer name and site address first",
        "If they have an order number, that speeds up lookup",
        "Assure them we'll get it resolved"
      ]
    },
    details: {
      say: "Thank you for explaining that. Let me document this so we can get a crew out to you.",
      ask: "When did this happen? Is the site secure?",
      tips: [
        "Damaged panel: usually wind or vehicle impact. Ask if it's a safety hazard.",
        "Fallen fence: check how many panels. Was it weather-related?",
        "Missing parts: could be theft. Document what's missing.",
        "Gate issue: is the gate stuck open (security risk) or stuck closed (access blocked)?",
        "For urgent issues (site exposed, safety hazard), mark as Urgent"
      ]
    },
    resolution: {
      say: "I've got all the details. We'll get a team out to take care of this.",
      ask: "Is there a preferred time for our crew to come out?",
      tips: [
        "Same-day service is available for urgent issues",
        "For non-urgent, typically 24\u201348 hours",
        "Let the customer know someone will confirm the appointment",
        "If it's extensive damage, a supervisor may need to assess first"
      ],
      objections: [
        { trigger: "This is unacceptable", response: "I completely understand your frustration, and I apologize for the inconvenience. We take these issues seriously and want to make it right. Let me get a team dispatched to you as quickly as possible." },
        { trigger: "Who's going to pay for this?", response: "If the damage was due to normal weather or wear, our maintenance service covers repairs at no additional cost during your rental term. If it was caused by a third party, we'll document everything and work with you on next steps." }
      ]
    }
  },

  // =========================================================
  // REMOVAL SCRIPTS
  // =========================================================
  "removal": {
    intro: {
      say: "I can help you schedule a fence removal! Let me get your details.",
      ask: "Is this for a fence rental or barricade rental that's wrapping up?",
      tips: [
        "Confirm the customer name and rental site address",
        "Get the order number if they have it",
        "Verify there are no outstanding extension charges"
      ]
    },
    scheduling: {
      say: "When would you like us to schedule the removal?",
      ask: "Are there any access restrictions or special instructions for our crew?",
      tips: [
        "Typical removal takes 1\u20132 days depending on size",
        "Ask if there's equipment or obstacles near the fence",
        "Confirm all rental items (panels, gates, sandbags) will be accessible",
        "If they need to keep the fence a few more days, discuss extension costs"
      ]
    },
    confirmation: {
      say: "I've scheduled your removal. You'll get a confirmation call the day before.",
      ask: "Is there anything else I can help you with?",
      tips: [
        "Confirm the preferred removal date",
        "Remind them all rental items need to be accessible",
        "If they have privacy screen (purchased), they keep it \u2014 it's theirs",
        "Offer to schedule a follow-up if there might be a new project"
      ]
    }
  },

  // =========================================================
  // GENERAL QUESTION SCRIPTS
  // =========================================================
  "general": {
    intro: {
      say: "I'd be happy to help! What's your question?",
      ask: "Are you calling about an existing rental, or do you have a general question?",
      tips: [
        "Listen actively \u2014 let the customer explain before jumping in",
        "If it's about an existing rental, get their name/address/order number first",
        "For billing questions, have them reference their invoice number"
      ]
    },
    lookup: {
      say: "Let me look into that for you.",
      ask: "Can you give me your name and the rental site address?",
      tips: [
        "Common billing questions: extension charges, minimum fees, delivery costs",
        "Extension rate: 16% of rental charges per month (min $94.35/mo)",
        "The $950 minimum covers the full 6-month term including delivery, install, and removal",
        "If you can't answer the question, offer to have a manager call them back"
      ]
    },
    wrapup: {
      say: "Is there anything else I can help you with today?",
      ask: "",
      tips: [
        "Summarize what was discussed",
        "If follow-up is needed, set clear expectations on timing",
        "If transferring to another department, explain who they'll be speaking with"
      ]
    }
  }
};
