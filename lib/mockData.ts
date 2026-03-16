import { SKU, AnalysisResult } from './types'

export const ALL_SKUS: SKU[] = [
  // index 0: PRD-001
  {
    sku_id: 'PRD-001', brand: 'Nature Sweet', product_name: 'Cherry Tomatoes 1lb',
    category: 'Produce', subcategory: 'Tomatoes', price: 4.99, velocity_tier: 'A',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 2400, base_weekly_revenue: 11976
  },
  // index 1: PRD-002
  {
    sku_id: 'PRD-002', brand: 'Organic Girl', product_name: 'Organic Avocados 4-Pack',
    category: 'Produce', subcategory: 'Avocados', price: 6.49, velocity_tier: 'A',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'high', protein_content: 'medium', format_size: 'standard', wellness_claim: ['organic', 'non-gmo'], organic_certified: true, dietary_segment: ['vegan', 'keto'] },
    base_weekly_units: 1800, base_weekly_revenue: 11682
  },
  // index 2: PRD-003
  {
    sku_id: 'PRD-003', brand: 'Del Monte', product_name: 'Jalapeño Peppers 12oz',
    category: 'Produce', subcategory: 'Peppers', price: 2.99, velocity_tier: 'B',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 950, base_weekly_revenue: 2840
  },
  // index 3: PRD-004
  {
    sku_id: 'PRD-004', brand: "Driscoll's", product_name: 'Strawberries 1lb',
    category: 'Produce', subcategory: 'Berries', price: 4.49, velocity_tier: 'A',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 3200, base_weekly_revenue: 14368
  },
  // index 4: PRD-005
  {
    sku_id: 'PRD-005', brand: 'Simple Truth', product_name: 'Organic Limes Bag 2lb',
    category: 'Produce', subcategory: 'Citrus', price: 3.49, velocity_tier: 'B',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['organic'], organic_certified: true, dietary_segment: ['vegan'] },
    base_weekly_units: 780, base_weekly_revenue: 2722
  },
  // index 5: PRD-006
  {
    sku_id: 'PRD-006', brand: 'Mission', product_name: 'Hass Avocados Bag 6ct',
    category: 'Produce', subcategory: 'Avocados', price: 7.99, velocity_tier: 'A',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'high', protein_content: 'medium', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan', 'keto'] },
    base_weekly_units: 2100, base_weekly_revenue: 16779
  },
  // index 6: PRD-007
  {
    sku_id: 'PRD-007', brand: 'Del Cabo', product_name: 'Organic Bell Peppers 3-Pack',
    category: 'Produce', subcategory: 'Peppers', price: 5.49, velocity_tier: 'B',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['organic'], organic_certified: true, dietary_segment: ['vegan'] },
    base_weekly_units: 640, base_weekly_revenue: 3514
  },
  // index 7: PRD-008
  {
    sku_id: 'PRD-008', brand: 'Pero Family Farms', product_name: 'Mini Sweet Peppers 1lb',
    category: 'Produce', subcategory: 'Peppers', price: 3.99, velocity_tier: 'B',
    country_of_origin: 'Mexico',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'small', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 890, base_weekly_revenue: 3551
  },
  // index 8: PRD-011
  {
    sku_id: 'PRD-011', brand: 'AppHarvest', product_name: 'Greenhouse Tomatoes 16oz',
    category: 'Produce', subcategory: 'Tomatoes', price: 5.49, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 620, base_weekly_revenue: 3404
  },
  // index 9: PRD-012
  {
    sku_id: 'PRD-012', brand: 'Sunset', product_name: 'Campari Tomatoes 1lb',
    category: 'Produce', subcategory: 'Tomatoes', price: 4.79, velocity_tier: 'A',
    country_of_origin: 'Canada',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 1100, base_weekly_revenue: 5269
  },
  // index 10: PRD-013
  {
    sku_id: 'PRD-013', brand: 'Cal-Organic', product_name: 'Organic California Avocados 3ct',
    category: 'Produce', subcategory: 'Avocados', price: 8.99, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'medium', format_size: 'standard', wellness_claim: ['organic', 'non-gmo'], organic_certified: true, dietary_segment: ['vegan', 'keto'] },
    base_weekly_units: 480, base_weekly_revenue: 4315
  },
  // index 11: PRD-014
  {
    sku_id: 'PRD-014', brand: 'Gotham Greens', product_name: 'Greenhouse Basil',
    category: 'Produce', subcategory: 'Herbs', price: 3.99, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'small', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 340, base_weekly_revenue: 1357
  },
  // index 12: CAN-001
  {
    sku_id: 'CAN-001', brand: 'Muir Glen', product_name: 'Organic Diced Tomatoes 14.5oz',
    category: 'Canned Goods', subcategory: 'Canned Tomatoes', price: 2.49, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['organic', 'non-gmo'], organic_certified: true, dietary_segment: ['vegan'] },
    base_weekly_units: 1900, base_weekly_revenue: 4731
  },
  // index 13: CAN-002
  {
    sku_id: 'CAN-002', brand: "Hunt's", product_name: 'Diced Tomatoes No Salt 14.5oz',
    category: 'Canned Goods', subcategory: 'Canned Tomatoes', price: 1.29, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 3400, base_weekly_revenue: 4386
  },
  // index 14: CAN-003
  {
    sku_id: 'CAN-003', brand: 'Wholly Guacamole', product_name: 'Classic Guacamole 6oz',
    category: 'Refrigerated', subcategory: 'Dips & Spreads', price: 4.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'small', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: ['vegan', 'keto'] },
    base_weekly_units: 1600, base_weekly_revenue: 7984
  },
  // index 15: (placeholder — not in spec but referenced; using CAN-003 duplicate logic)
  {
    sku_id: 'CAN-003B', brand: 'Wholly Guacamole', product_name: 'Organic Guacamole 8oz',
    category: 'Refrigerated', subcategory: 'Dips & Spreads', price: 5.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'standard', wellness_claim: ['organic', 'non-gmo'], organic_certified: true, dietary_segment: ['vegan', 'keto'] },
    base_weekly_units: 1750, base_weekly_revenue: 10483
  },
  // index 16: SNK-001
  {
    sku_id: 'SNK-001', brand: "Lay's", product_name: 'Classic Potato Chips Party Size 13oz',
    category: 'Snacks', subcategory: 'Potato Chips', price: 5.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 4200, base_weekly_revenue: 25158
  },
  // index 17: SNK-002
  {
    sku_id: 'SNK-002', brand: 'Doritos', product_name: 'Nacho Cheese Tortilla Chips 9.75oz',
    category: 'Snacks', subcategory: 'Tortilla Chips', price: 4.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 3800, base_weekly_revenue: 18962
  },
  // index 18: SNK-003
  {
    sku_id: 'SNK-003', brand: 'Oreo', product_name: 'Double Stuf Cookies Family Size',
    category: 'Snacks', subcategory: 'Cookies', price: 5.49, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 2900, base_weekly_revenue: 15921
  },
  // index 19: SNK-004
  {
    sku_id: 'SNK-004', brand: "Ben & Jerry's", product_name: 'Chocolate Chip Cookie Dough Pint',
    category: 'Frozen', subcategory: 'Ice Cream', price: 5.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 2200, base_weekly_revenue: 13178
  },
  // index 20: SNK-005
  {
    sku_id: 'SNK-005', brand: 'Pringles', product_name: 'Original Crisps 14.5oz',
    category: 'Snacks', subcategory: 'Potato Chips', price: 5.49, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 2600, base_weekly_revenue: 14274
  },
  // index 21: SNK-006
  {
    sku_id: 'SNK-006', brand: 'Cheez-It', product_name: 'Original Baked Snack Crackers 21oz',
    category: 'Snacks', subcategory: 'Crackers', price: 7.49, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1900, base_weekly_revenue: 14231
  },
  // index 22: BEV-001
  {
    sku_id: 'BEV-001', brand: 'Coca-Cola', product_name: 'Classic Cola 12-Pack 12oz Cans',
    category: 'Beverages', subcategory: 'Carbonated Soft Drinks', price: 7.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 5800, base_weekly_revenue: 46342
  },
  // index 23: BEV-002
  {
    sku_id: 'BEV-002', brand: 'PepsiCo', product_name: 'Pepsi Cola 2-Liter',
    category: 'Beverages', subcategory: 'Carbonated Soft Drinks', price: 2.49, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'high', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 4100, base_weekly_revenue: 10209
  },
  // index 24: ALC-001
  {
    sku_id: 'ALC-001', brand: 'White Claw', product_name: 'Hard Seltzer Variety Pack 12ct',
    category: 'Alcohol', subcategory: 'Hard Seltzer', price: 17.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'large', wellness_claim: ['gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1400, base_weekly_revenue: 25186
  },
  // index 25: ALC-002
  {
    sku_id: 'ALC-002', brand: 'Truly', product_name: 'Lemonade Hard Seltzer 12ct',
    category: 'Alcohol', subcategory: 'Hard Seltzer', price: 16.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'large', wellness_claim: ['gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1100, base_weekly_revenue: 18689
  },
  // index 26: PRO-001
  {
    sku_id: 'PRO-001', brand: 'RXBAR', product_name: 'Chocolate Sea Salt Protein Bar 12ct',
    category: 'Snacks', subcategory: 'Protein Bars', price: 21.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'medium', protein_content: 'high', format_size: 'standard', wellness_claim: ['non-gmo', 'gluten-free'], organic_certified: false, dietary_segment: ['paleo'] },
    base_weekly_units: 890, base_weekly_revenue: 19571
  },
  // index 27: PRO-002
  {
    sku_id: 'PRO-002', brand: 'Quest', product_name: 'Chocolate Chip Cookie Dough Bar 12ct',
    category: 'Snacks', subcategory: 'Protein Bars', price: 23.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'medium', protein_content: 'high', format_size: 'standard', wellness_claim: ['gluten-free'], organic_certified: false, dietary_segment: ['keto'] },
    base_weekly_units: 1100, base_weekly_revenue: 26389
  },
  // index 28: PRO-003
  {
    sku_id: 'PRO-003', brand: 'Fairlife', product_name: 'Core Power Elite 42g Protein Shake',
    category: 'Beverages', subcategory: 'Protein Shakes', price: 3.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'medium', protein_content: 'high', format_size: 'small', wellness_claim: ['gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 2400, base_weekly_revenue: 9576
  },
  // index 29: PRO-004
  {
    sku_id: 'PRO-004', brand: 'Chobani', product_name: 'Greek Yogurt Plain Nonfat 32oz',
    category: 'Dairy', subcategory: 'Yogurt', price: 5.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'high', format_size: 'large', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1800, base_weekly_revenue: 10782
  },
  // index 30: PRO-005
  {
    sku_id: 'PRO-005', brand: "Siggi's", product_name: 'Icelandic Skyr Plain 24oz',
    category: 'Dairy', subcategory: 'Yogurt', price: 7.49, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'high', format_size: 'standard', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 740, base_weekly_revenue: 5542
  },
  // index 31: PRO-006
  {
    sku_id: 'PRO-006', brand: 'Chomps', product_name: 'Original Beef Jerky Sticks 24ct',
    category: 'Snacks', subcategory: 'Meat Snacks', price: 39.99, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'high', format_size: 'standard', wellness_claim: ['non-gmo', 'gluten-free', 'paleo'], organic_certified: false, dietary_segment: ['keto', 'paleo'] },
    base_weekly_units: 320, base_weekly_revenue: 12797
  },
  // index 32: WEL-001
  {
    sku_id: 'WEL-001', brand: 'Liquid I.V.', product_name: 'Hydration Multiplier Lemon Lime 16ct',
    category: 'Beverages', subcategory: 'Hydration', price: 24.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo', 'gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1200, base_weekly_revenue: 29988
  },
  // index 33: WEL-002
  {
    sku_id: 'WEL-002', brand: 'Athletic Brewing', product_name: 'Run Wild IPA NA Beer 6-Pack',
    category: 'Beverages', subcategory: 'Non-Alcoholic Beer', price: 11.99, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 580, base_weekly_revenue: 6954
  },
  // index 34: WEL-003
  {
    sku_id: 'WEL-003', brand: 'Olipop', product_name: 'Vintage Cola Prebiotic Soda 4-Pack',
    category: 'Beverages', subcategory: 'Functional Beverages', price: 9.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo', 'gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1600, base_weekly_revenue: 15984
  },
  // index 35: WEL-003 (Olipop — referenced as index 35 in GLP1 scenario)
  {
    sku_id: 'WEL-003B', brand: 'Olipop', product_name: 'Classic Grape Prebiotic Soda 4-Pack',
    category: 'Beverages', subcategory: 'Functional Beverages', price: 9.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo', 'gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1400, base_weekly_revenue: 13986
  },
  // index 36: WEL-004
  {
    sku_id: 'WEL-004', brand: 'Poppi', product_name: 'Strawberry Lemon Prebiotic Soda 4-Pack',
    category: 'Beverages', subcategory: 'Functional Beverages', price: 8.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: ['non-gmo', 'gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1400, base_weekly_revenue: 12586
  },
  // index 37: WEL-005
  {
    sku_id: 'WEL-005', brand: 'Waterloo', product_name: 'Sparkling Water Variety 12ct',
    category: 'Beverages', subcategory: 'Sparkling Water', price: 7.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'large', wellness_claim: ['non-gmo'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 2200, base_weekly_revenue: 17578
  },
  // index 38: PRD-020
  {
    sku_id: 'PRD-020', brand: 'Dole', product_name: 'Frozen Strawberries 16oz',
    category: 'Frozen', subcategory: 'Frozen Fruit', price: 3.49, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'low', format_size: 'standard', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 1700, base_weekly_revenue: 5933
  },
  // index 39: PRD-021
  {
    sku_id: 'PRD-021', brand: 'Birds Eye', product_name: 'Frozen Broccoli Florets 12oz',
    category: 'Frozen', subcategory: 'Frozen Vegetables', price: 2.79, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'medium', format_size: 'standard', wellness_claim: [], organic_certified: false, dietary_segment: ['vegan'] },
    base_weekly_units: 2100, base_weekly_revenue: 5859
  },
  // index 40: WEL-006
  {
    sku_id: 'WEL-006', brand: 'Halo Top', product_name: 'Vanilla Bean Light Ice Cream Pint',
    category: 'Frozen', subcategory: 'Ice Cream', price: 5.49, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'high', format_size: 'standard', wellness_claim: ['gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 1300, base_weekly_revenue: 7137
  },
  // index 41: WEL-007
  {
    sku_id: 'WEL-007', brand: 'GoodFood', product_name: 'High Protein Low Calorie Snack Bar 8ct',
    category: 'Snacks', subcategory: 'Protein Bars', price: 14.99, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'low', protein_content: 'high', format_size: 'small', wellness_claim: ['non-gmo', 'gluten-free'], organic_certified: false, dietary_segment: ['keto'] },
    base_weekly_units: 560, base_weekly_revenue: 8394
  },
  // index 42: SNK-010
  {
    sku_id: 'SNK-010', brand: 'Kind', product_name: 'Dark Chocolate Nuts & Sea Salt Bar Single',
    category: 'Snacks', subcategory: 'Nutrition Bars', price: 1.99, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'medium', protein_content: 'medium', format_size: 'small', wellness_claim: ['non-gmo', 'gluten-free'], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 3400, base_weekly_revenue: 6766
  },
  // index 43: SNK-011
  {
    sku_id: 'SNK-011', brand: 'Lesser Evil', product_name: 'Himalayan Pink Salt Popcorn 5oz',
    category: 'Snacks', subcategory: 'Popcorn', price: 4.99, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'medium', protein_content: 'low', format_size: 'standard', wellness_claim: ['organic', 'non-gmo'], organic_certified: true, dietary_segment: ['vegan'] },
    base_weekly_units: 680, base_weekly_revenue: 3392
  },
  // index 44: SNK-012
  {
    sku_id: 'SNK-012', brand: 'Siete', product_name: 'Grain Free Tortilla Chips 5oz',
    category: 'Snacks', subcategory: 'Tortilla Chips', price: 5.49, velocity_tier: 'B',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'medium', protein_content: 'low', format_size: 'small', wellness_claim: ['grain-free', 'non-gmo', 'paleo'], organic_certified: false, dietary_segment: ['paleo', 'vegan'] },
    base_weekly_units: 510, base_weekly_revenue: 2800
  },
  // index 45: BEV-003
  {
    sku_id: 'BEV-003', brand: 'Gatorade', product_name: 'Fruit Punch Sports Drink 32oz',
    category: 'Beverages', subcategory: 'Sports Drinks', price: 2.29, velocity_tier: 'A',
    country_of_origin: 'USA',
    spins_attributes: { calorie_density: 'medium', protein_content: 'low', format_size: 'large', wellness_claim: [], organic_certified: false, dietary_segment: [] },
    base_weekly_units: 3600, base_weekly_revenue: 8244
  },
]

// Build a lookup map for safe referencing
export const SKU_MAP = Object.fromEntries(ALL_SKUS.map(s => [s.sku_id, s]))

// ============================================================
// SCENARIO A: TARIFF SHOCK
// ============================================================
export const TARIFF_SCENARIO: AnalysisResult = {
  scenario_id: 'tariff_mexican_produce_2026',
  mitigation_summary: 'Shift promotional and shelf support toward domestic greenhouse tomatoes, California-grown avocados, and canned alternatives ahead of the price shock hitting consumer awareness. Retailers who move quickly on end-cap placement and digital shelf positioning for domestic-origin SKUs are likely to capture redirected basket spend before competitors respond. Additionally, accelerating inventory builds on canned and frozen produce categories will hedge against fresh supply volatility and satisfy pantry-stocking behavior expected in the first 30 days.',
  demand_shock: {
    trigger_type: 'policy_acute',
    trigger_summary: 'A 15% tariff on Mexican agricultural imports takes effect immediately, affecting all produce categories. Mexican-origin fruits and vegetables account for ~40% of US fresh produce supply.',
    affected_segments: ['Fresh Produce', 'Avocados', 'Tomatoes', 'Berries', 'Citrus', 'Peppers'],
    demand_direction: {
      suppress: ['country_of_origin:Mexico', 'fresh_produce', 'avocado', 'berry', 'citrus'],
      amplify: ['country_of_origin:USA', 'country_of_origin:Canada', 'greenhouse_grown', 'canned_preserved', 'frozen_produce', 'domestic_origin'],
    },
    magnitude: {
      suppress_pct: 22,
      amplify_pct: 18,
      confidence: 'high',
    },
    timeline: 'acute_0_30',
    notes: 'Impact is acute and price-driven. Consumer substitution to domestic and preserved alternatives expected within 2 weeks.',
  },
  at_risk_skus: [
    { ...ALL_SKUS[0], impact_score: 0.92, impact_direction: 'suppress', projected_weekly_revenue_change: -2634, matched_attributes: ['country_of_origin:Mexico', 'fresh_produce', 'tomato'] },
    { ...ALL_SKUS[1], impact_score: 0.95, impact_direction: 'suppress', projected_weekly_revenue_change: -2570, matched_attributes: ['country_of_origin:Mexico', 'avocado', 'organic_certified'] },
    { ...ALL_SKUS[5], impact_score: 0.93, impact_direction: 'suppress', projected_weekly_revenue_change: -3691, matched_attributes: ['country_of_origin:Mexico', 'avocado', 'large_format'] },
    { ...ALL_SKUS[3], impact_score: 0.88, impact_direction: 'suppress', projected_weekly_revenue_change: -3161, matched_attributes: ['country_of_origin:Mexico', 'fresh_produce', 'berry'] },
    { ...ALL_SKUS[4], impact_score: 0.85, impact_direction: 'suppress', projected_weekly_revenue_change: -599, matched_attributes: ['country_of_origin:Mexico', 'organic_certified', 'citrus'] },
    { ...ALL_SKUS[2], impact_score: 0.80, impact_direction: 'suppress', projected_weekly_revenue_change: -625, matched_attributes: ['country_of_origin:Mexico', 'fresh_produce', 'pepper'] },
    { ...ALL_SKUS[6], impact_score: 0.82, impact_direction: 'suppress', projected_weekly_revenue_change: -773, matched_attributes: ['country_of_origin:Mexico', 'organic_certified', 'pepper'] },
    { ...ALL_SKUS[7], impact_score: 0.78, impact_direction: 'suppress', projected_weekly_revenue_change: -781, matched_attributes: ['country_of_origin:Mexico', 'fresh_produce', 'pepper'] },
  ],
  opportunity_skus: [
    { ...ALL_SKUS[8], impact_score: 0.87, impact_direction: 'amplify', projected_weekly_revenue_change: 2963, matched_attributes: ['country_of_origin:USA', 'greenhouse_grown', 'tomato'] },
    { ...ALL_SKUS[9], impact_score: 0.84, impact_direction: 'amplify', projected_weekly_revenue_change: 4440, matched_attributes: ['country_of_origin:Canada', 'greenhouse_grown', 'tomato'] },
    { ...ALL_SKUS[10], impact_score: 0.91, impact_direction: 'amplify', projected_weekly_revenue_change: 3927, matched_attributes: ['country_of_origin:USA', 'organic_certified', 'avocado'] },
    { ...ALL_SKUS[11], impact_score: 0.76, impact_direction: 'amplify', projected_weekly_revenue_change: 1040, matched_attributes: ['country_of_origin:USA', 'domestic_origin', 'fresh_herb'] },
    { ...ALL_SKUS[12], impact_score: 0.89, impact_direction: 'amplify', projected_weekly_revenue_change: 4220, matched_attributes: ['country_of_origin:USA', 'canned_preserved', 'organic_certified', 'tomato'] },
    { ...ALL_SKUS[13], impact_score: 0.82, impact_direction: 'amplify', projected_weekly_revenue_change: 3908, matched_attributes: ['country_of_origin:USA', 'canned_preserved', 'tomato'] },
    { ...ALL_SKUS[14], impact_score: 0.79, impact_direction: 'amplify', projected_weekly_revenue_change: 6307, matched_attributes: ['country_of_origin:USA', 'domestic_alternative', 'avocado'] },
    { ...ALL_SKUS[38], impact_score: 0.74, impact_direction: 'amplify', projected_weekly_revenue_change: 1306, matched_attributes: ['country_of_origin:USA', 'frozen_produce', 'domestic_origin'] },
  ],
  substitution_pairs: [
    {
      at_risk_sku: { ...ALL_SKUS[0], impact_score: 0.92, impact_direction: 'suppress', projected_weekly_revenue_change: -2634, matched_attributes: ['country_of_origin:Mexico', 'fresh_produce', 'tomato'] },
      substitutes: [
        { sku: { ...ALL_SKUS[8], impact_score: 0.87, impact_direction: 'amplify', projected_weekly_revenue_change: 2963, matched_attributes: ['country_of_origin:USA', 'greenhouse_grown', 'tomato'] }, capture_probability: 0.74, reasoning: 'Direct category match (tomatoes), domestic greenhouse origin eliminates tariff exposure. Similar price point ($5.49 vs $4.99). Substitution friction is low.', matched_attributes: ['tomato_category', 'similar_price_band', 'domestic_origin'] },
        { sku: { ...ALL_SKUS[9], impact_score: 0.84, impact_direction: 'amplify', projected_weekly_revenue_change: 4440, matched_attributes: ['country_of_origin:Canada', 'greenhouse_grown', 'tomato'] }, capture_probability: 0.68, reasoning: 'Canadian-origin campari tomatoes avoid Mexico tariff. Premium variety may attract consumers trading up. Strong velocity tier A.', matched_attributes: ['tomato_category', 'non_mexico_origin', 'velocity_tier_a'] },
        { sku: { ...ALL_SKUS[12], impact_score: 0.89, impact_direction: 'amplify', projected_weekly_revenue_change: 4220, matched_attributes: ['country_of_origin:USA', 'canned_preserved', 'organic_certified', 'tomato'] }, capture_probability: 0.42, reasoning: 'Canned is a category shift but strongly insulated from import tariffs. Organic certified adds premium signal. Expect pantry-stocking behavior from price-sensitive consumers.', matched_attributes: ['tomato_category', 'domestic_origin', 'organic_certified'] },
      ],
    },
    {
      at_risk_sku: { ...ALL_SKUS[1], impact_score: 0.95, impact_direction: 'suppress', projected_weekly_revenue_change: -2570, matched_attributes: ['country_of_origin:Mexico', 'avocado', 'organic_certified'] },
      substitutes: [
        { sku: { ...ALL_SKUS[10], impact_score: 0.91, impact_direction: 'amplify', projected_weekly_revenue_change: 3927, matched_attributes: ['country_of_origin:USA', 'organic_certified', 'avocado'] }, capture_probability: 0.81, reasoning: 'Strongest substitute: same subcategory (avocados), organic certified, domestic California origin. Higher price ($8.99 vs $6.49) may cause minor drop-off but organic consumers show high brand loyalty.', matched_attributes: ['avocado_subcategory', 'organic_certified', 'domestic_origin', 'keto_dietary'] },
        { sku: { ...ALL_SKUS[14], impact_score: 0.79, impact_direction: 'amplify', projected_weekly_revenue_change: 6307, matched_attributes: ['country_of_origin:USA', 'domestic_alternative', 'avocado'] }, capture_probability: 0.61, reasoning: 'Pre-made guacamole eliminates ripeness uncertainty. Appeals to keto/vegan shoppers in same purchase journey. Domestic origin unaffected by tariff.', matched_attributes: ['avocado_category', 'keto_dietary', 'domestic_origin', 'convenience'] },
        { sku: { ...ALL_SKUS[8], impact_score: 0.87, impact_direction: 'amplify', projected_weekly_revenue_change: 2963, matched_attributes: ['country_of_origin:USA', 'greenhouse_grown', 'tomato'] }, capture_probability: 0.18, reasoning: 'Cross-category adjacency only. Unlikely substitution but some shared produce trip basket. Minor capture expected.', matched_attributes: ['produce_category', 'domestic_origin'] },
      ],
    },
    {
      at_risk_sku: { ...ALL_SKUS[3], impact_score: 0.88, impact_direction: 'suppress', projected_weekly_revenue_change: -3161, matched_attributes: ['country_of_origin:Mexico', 'fresh_produce', 'berry'] },
      substitutes: [
        { sku: { ...ALL_SKUS[38], impact_score: 0.74, impact_direction: 'amplify', projected_weekly_revenue_change: 1306, matched_attributes: ['country_of_origin:USA', 'frozen_produce', 'domestic_origin'] }, capture_probability: 0.66, reasoning: 'Frozen strawberries directly substitute fresh in smoothies, yogurt toppers, baking. Domestic origin fully insulated from tariff. Lower price point captures value-seeking consumers.', matched_attributes: ['strawberry_category', 'domestic_origin', 'frozen_vs_fresh'] },
        { sku: { ...ALL_SKUS[9], impact_score: 0.84, impact_direction: 'amplify', projected_weekly_revenue_change: 4440, matched_attributes: ['country_of_origin:Canada', 'greenhouse_grown', 'tomato'] }, capture_probability: 0.22, reasoning: 'Produce basket adjacency; shoppers may shift spend to available domestic produce. Weak substitute.', matched_attributes: ['fresh_produce', 'domestic_origin'] },
        { sku: { ...ALL_SKUS[12], impact_score: 0.89, impact_direction: 'amplify', projected_weekly_revenue_change: 4220, matched_attributes: ['country_of_origin:USA', 'canned_preserved', 'organic_certified', 'tomato'] }, capture_probability: 0.14, reasoning: 'Category crossover unlikely but preserved goods benefit from tariff-driven pantry-stocking behavior broadly.', matched_attributes: ['preserved_goods', 'domestic_origin'] },
      ],
    },
  ],
  revenue_impact: {
    total_at_risk_revenue: -14833,
    total_opportunity_revenue: 28111,
    net_redistribution: 13278,
    by_category: [
      { category: 'Fresh Produce (Mexico)', before: 57232, change: -12581, direction: 'suppress' },
      { category: 'Avocados (Mexico)', before: 28461, change: -6261, direction: 'suppress' },
      { category: 'Domestic Produce', before: 15625, change: 9847, direction: 'amplify' },
      { category: 'Greenhouse Grown', before: 8673, change: 6201, direction: 'amplify' },
      { category: 'Canned & Preserved', before: 9117, change: 8128, direction: 'amplify' },
      { category: 'Frozen Produce', before: 11792, change: 3935, direction: 'amplify' },
    ],
  },
  processing_time_ms: 7240,
}

// ============================================================
// SCENARIO B: GLP-1 BEHAVIORAL SHIFT
// ============================================================
export const GLP1_SCENARIO: AnalysisResult = {
  scenario_id: 'glp1_adoption_surge_2026',
  mitigation_summary: 'Reallocate shelf space and trade spend from large-format high-calorie snacks and sugary beverages toward high-protein bars, functional sodas, and hydration products. GLP-1 users are actively searching for alternatives and brand switching is elevated — early placement wins disproportionate share. Focus digital and in-store discovery on RXBAR, Quest, Olipop, Poppi, and Liquid I.V., which score highest on capture probability against the suppressed SKUs. Consider bundle promotions pairing protein + hydration to increase basket size and build new purchase habits with this growing cohort.',
  demand_shock: {
    trigger_type: 'behavioral_secular',
    trigger_summary: 'GLP-1 medication adoption has surged 400% year-over-year in the 35–55 age cohort. Users report significantly reduced appetite, shifting purchasing behavior away from large-format, high-calorie, and impulse categories toward high-protein, small-portion, functional, and hydration products.',
    affected_segments: ['Snacks', 'Beverages', 'Alcohol', 'Frozen Desserts', 'Protein Foods', 'Functional Wellness', 'Hydration'],
    demand_direction: {
      suppress: ['high_calorie_density', 'large_format', 'sugary_beverages', 'alcohol', 'impulse_snacks', 'high_sugar'],
      amplify: ['high_protein', 'low_calorie_dense', 'small_portion', 'functional', 'hydration', 'wellness_claim'],
    },
    magnitude: {
      suppress_pct: 31,
      amplify_pct: 28,
      confidence: 'high',
    },
    timeline: 'secular_6_12',
    notes: 'Secular behavioral trend. Impact accelerates over 6–12 months as GLP-1 user base grows. Expect SKU rationalization pressure on high-calorie large-format segments.',
  },
  at_risk_skus: [
    { ...ALL_SKUS[16], impact_score: 0.94, impact_direction: 'suppress', projected_weekly_revenue_change: -7799, matched_attributes: ['high_calorie_density', 'large_format', 'impulse_snack'] },
    { ...ALL_SKUS[22], impact_score: 0.96, impact_direction: 'suppress', projected_weekly_revenue_change: -14366, matched_attributes: ['high_calorie_density', 'large_format', 'sugary_beverage'] },
    { ...ALL_SKUS[17], impact_score: 0.91, impact_direction: 'suppress', projected_weekly_revenue_change: -5878, matched_attributes: ['high_calorie_density', 'large_format', 'impulse_snack'] },
    { ...ALL_SKUS[24], impact_score: 0.89, impact_direction: 'suppress', projected_weekly_revenue_change: -7808, matched_attributes: ['alcohol', 'large_format', 'impulse'] },
    { ...ALL_SKUS[18], impact_score: 0.88, impact_direction: 'suppress', projected_weekly_revenue_change: -4936, matched_attributes: ['high_calorie_density', 'large_format', 'impulse_snack'] },
    { ...ALL_SKUS[23], impact_score: 0.86, impact_direction: 'suppress', projected_weekly_revenue_change: -3165, matched_attributes: ['high_calorie_density', 'large_format', 'sugary_beverage'] },
    { ...ALL_SKUS[20], impact_score: 0.85, impact_direction: 'suppress', projected_weekly_revenue_change: -4412, matched_attributes: ['high_calorie_density', 'large_format', 'impulse_snack'] },
    { ...ALL_SKUS[25], impact_score: 0.82, impact_direction: 'suppress', projected_weekly_revenue_change: -5796, matched_attributes: ['alcohol', 'large_format'] },
    { ...ALL_SKUS[19], impact_score: 0.80, impact_direction: 'suppress', projected_weekly_revenue_change: -4083, matched_attributes: ['high_calorie_density', 'impulse_snack'] },
    { ...ALL_SKUS[21], impact_score: 0.77, impact_direction: 'suppress', projected_weekly_revenue_change: -4412, matched_attributes: ['high_calorie_density', 'large_format', 'impulse_snack'] },
  ],
  opportunity_skus: [
    { ...ALL_SKUS[26], impact_score: 0.93, impact_direction: 'amplify', projected_weekly_revenue_change: 6081, matched_attributes: ['high_protein', 'small_portion', 'wellness_claim', 'non-gmo'] },
    { ...ALL_SKUS[28], impact_score: 0.91, impact_direction: 'amplify', projected_weekly_revenue_change: 2971, matched_attributes: ['high_protein', 'small_format', 'wellness_claim'] },
    { ...ALL_SKUS[27], impact_score: 0.90, impact_direction: 'amplify', projected_weekly_revenue_change: 8180, matched_attributes: ['high_protein', 'small_portion', 'keto', 'wellness_claim'] },
    { ...ALL_SKUS[29], impact_score: 0.88, impact_direction: 'amplify', projected_weekly_revenue_change: 3343, matched_attributes: ['high_protein', 'low_calorie_dense', 'wellness_claim'] },
    { ...ALL_SKUS[32], impact_score: 0.86, impact_direction: 'amplify', projected_weekly_revenue_change: 9296, matched_attributes: ['hydration', 'functional', 'wellness_claim'] },
    { ...ALL_SKUS[35], impact_score: 0.85, impact_direction: 'amplify', projected_weekly_revenue_change: 5453, matched_attributes: ['functional_beverage', 'low_calorie_dense', 'wellness_claim'] },
    { ...ALL_SKUS[36], impact_score: 0.83, impact_direction: 'amplify', projected_weekly_revenue_change: 3901, matched_attributes: ['functional_beverage', 'low_calorie_dense', 'wellness_claim'] },
    { ...ALL_SKUS[37], impact_score: 0.81, impact_direction: 'amplify', projected_weekly_revenue_change: 5448, matched_attributes: ['hydration', 'low_calorie_dense', 'sparkling_water'] },
    { ...ALL_SKUS[38], impact_score: 0.79, impact_direction: 'amplify', projected_weekly_revenue_change: 2213, matched_attributes: ['high_protein', 'low_calorie_dense'] },
    { ...ALL_SKUS[29], impact_score: 0.76, impact_direction: 'amplify', projected_weekly_revenue_change: 1717, matched_attributes: ['high_protein', 'low_calorie_dense'] },
  ],
  substitution_pairs: [
    {
      at_risk_sku: { ...ALL_SKUS[22], impact_score: 0.96, impact_direction: 'suppress', projected_weekly_revenue_change: -14366, matched_attributes: ['high_calorie_density', 'large_format', 'sugary_beverage'] },
      substitutes: [
        { sku: { ...ALL_SKUS[35], impact_score: 0.85, impact_direction: 'amplify', projected_weekly_revenue_change: 5453, matched_attributes: ['functional_beverage', 'low_calorie_dense', 'wellness_claim'] }, capture_probability: 0.71, reasoning: 'Olipop directly targets Coke drinkers seeking lower-sugar alternatives. Prebiotic formula aligns with GLP-1 user gut health focus. Same carbonated format reduces behavioral friction.', matched_attributes: ['carbonated_format', 'low_calorie_dense', 'functional', 'similar_occasion'] },
        { sku: { ...ALL_SKUS[36], impact_score: 0.83, impact_direction: 'amplify', projected_weekly_revenue_change: 3901, matched_attributes: ['functional_beverage', 'low_calorie_dense', 'wellness_claim'] }, capture_probability: 0.64, reasoning: 'Poppi appeals to same soda-occasion with probiotic wellness signal. 35–55 cohort is primary Poppi target demographic. Strong brand story around gut health resonates with GLP-1 lifestyle.', matched_attributes: ['carbonated_format', 'low_calorie_dense', 'probiotic', 'target_demographic_match'] },
        { sku: { ...ALL_SKUS[37], impact_score: 0.81, impact_direction: 'amplify', projected_weekly_revenue_change: 5448, matched_attributes: ['hydration', 'low_calorie_dense', 'sparkling_water'] }, capture_probability: 0.52, reasoning: 'Zero-calorie sparkling water captures hydration-focused GLP-1 users. Flavor variety pack reduces taste fatigue risk. Price point ($7.99/12ct) competitive with soda.', matched_attributes: ['carbonated_format', 'zero_calorie', 'hydration'] },
      ],
    },
    {
      at_risk_sku: { ...ALL_SKUS[16], impact_score: 0.94, impact_direction: 'suppress', projected_weekly_revenue_change: -7799, matched_attributes: ['high_calorie_density', 'large_format', 'impulse_snack'] },
      substitutes: [
        { sku: { ...ALL_SKUS[26], impact_score: 0.93, impact_direction: 'amplify', projected_weekly_revenue_change: 6081, matched_attributes: ['high_protein', 'small_portion', 'wellness_claim', 'non-gmo'] }, capture_probability: 0.68, reasoning: 'RXBAR targets same snack occasion with protein-forward positioning. Small format aligns with GLP-1 reduced appetite. Premium price justified by protein content and ingredient transparency.', matched_attributes: ['snack_occasion', 'small_format', 'high_protein', 'clean_label'] },
        { sku: { ...ALL_SKUS[27], impact_score: 0.90, impact_direction: 'amplify', projected_weekly_revenue_change: 8180, matched_attributes: ['high_protein', 'small_portion', 'keto', 'wellness_claim'] }, capture_probability: 0.61, reasoning: 'Quest Bar captures keto and high-protein positioned shoppers. Dessert-flavored options reduce perceived sacrifice from switching. Popular with 35–55 fitness-adjacent cohort.', matched_attributes: ['snack_occasion', 'high_protein', 'keto', 'similar_indulgence_format'] },
        { sku: { ...ALL_SKUS[44], impact_score: 0.74, impact_direction: 'amplify', projected_weekly_revenue_change: 2800, matched_attributes: ['small_format', 'low_calorie_dense', 'non-gmo'] }, capture_probability: 0.39, reasoning: 'Grain-free chips provide salty snack substitute. Paleo/clean label positioning appeals to health-conscious GLP-1 adjacent consumers. Smaller format reduces overconsumption risk.', matched_attributes: ['salty_snack_occasion', 'small_format', 'grain_free', 'paleo'] },
      ],
    },
    {
      at_risk_sku: { ...ALL_SKUS[24], impact_score: 0.89, impact_direction: 'suppress', projected_weekly_revenue_change: -7808, matched_attributes: ['alcohol', 'large_format', 'impulse'] },
      substitutes: [
        { sku: { ...ALL_SKUS[33], impact_score: 0.76, impact_direction: 'amplify', projected_weekly_revenue_change: 1717, matched_attributes: ['high_protein', 'low_calorie_dense'] }, capture_probability: 0.58, reasoning: 'Athletic Brewing NA beer directly substitutes the social drinking occasion without alcohol. GLP-1 users often reduce alcohol due to interaction warnings and reduced appetite. Craft IPA branding maintains status signal.', matched_attributes: ['social_occasion', 'non_alcoholic', 'craft_branding', 'low_calorie'] },
        { sku: { ...ALL_SKUS[32], impact_score: 0.86, impact_direction: 'amplify', projected_weekly_revenue_change: 9296, matched_attributes: ['hydration', 'functional', 'wellness_claim'] }, capture_probability: 0.44, reasoning: 'Liquid I.V. captures hydration-focused GLP-1 users who increase water intake. Higher perceived functionality than plain water. Electrolyte profile appealing post-exercise.', matched_attributes: ['hydration_occasion', 'functional', 'electrolytes'] },
        { sku: { ...ALL_SKUS[35], impact_score: 0.85, impact_direction: 'amplify', projected_weekly_revenue_change: 5453, matched_attributes: ['functional_beverage', 'low_calorie_dense', 'wellness_claim'] }, capture_probability: 0.38, reasoning: 'Functional soda substitutes social beverage occasion. Carbonation maintains sensory familiarity. Prebiotic positioning aligns with GLP-1 gut health narrative.', matched_attributes: ['social_occasion', 'carbonated', 'functional', 'low_calorie'] },
      ],
    },
  ],
  revenue_impact: {
    total_at_risk_revenue: -62250,
    total_opportunity_revenue: 49603,
    net_redistribution: -12647,
    by_category: [
      { category: 'Carbonated Soft Drinks', before: 56551, change: -17531, direction: 'suppress' },
      { category: 'Large Format Snacks', before: 88546, change: -27449, direction: 'suppress' },
      { category: 'Alcohol', before: 43875, change: -13601, direction: 'suppress' },
      { category: 'Protein Bars & Shakes', before: 65917, change: 18435, direction: 'amplify' },
      { category: 'Functional Beverages', before: 28570, change: 9354, direction: 'amplify' },
      { category: 'Hydration', before: 29988, change: 9296, direction: 'amplify' },
      { category: 'Sparkling Water', before: 17578, change: 5448, direction: 'amplify' },
      { category: 'Non-Alcoholic Beer', before: 6954, change: 1717, direction: 'amplify' },
    ],
  },
  processing_time_ms: 8910,
}

export const SCENARIOS = {
  tariff: TARIFF_SCENARIO,
  glp1: GLP1_SCENARIO,
}
