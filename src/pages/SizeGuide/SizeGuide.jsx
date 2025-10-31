import React from "react";
import "./SizeGuide.css";

const SizeGuide = () => {
  return (
    <div className="size-guide">
      <div className="container">
        <div className="size-guide-header">
          <h1>Size Guide</h1>
          <p className="last-updated">Find Your Perfect Fit</p>
        </div>

        <div className="size-guide-content">
          {/* Introduction */}
          <section className="guide-section">
            <h2>How to Measure</h2>
            <p>
              Finding the right size is essential for comfort and style. Follow
              our simple measuring guide to ensure you get the perfect fit every
              time.
            </p>

            <div className="measuring-steps">
              <div className="measuring-step">
                <div className="step-icon">📏</div>
                <div className="step-content">
                  <h3>Use a Flexible Tape</h3>
                  <p>
                    Always use a soft, flexible measuring tape for accurate
                    measurements.
                  </p>
                </div>
              </div>

              <div className="measuring-step">
                <div className="step-icon">👕</div>
                <div className="step-content">
                  <h3>Wear Fitted Clothing</h3>
                  <p>
                    Measure over light, fitted clothing for the most accurate
                    results.
                  </p>
                </div>
              </div>

              <div className="measuring-step">
                <div className="step-icon">🎯</div>
                <div className="step-content">
                  <h3>Keep Tape Snug</h3>
                  <p>Keep the tape snug but not tight against your body.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Women's Size Chart */}
          <section className="guide-section">
            <h2>👚 Women's Clothing</h2>
            <div className="size-chart">
              <div className="chart-header">
                <h3>Dresses, Tops & Bottoms</h3>
                <p>All measurements in inches</p>
              </div>
              <div className="chart-table">
                <div className="chart-row header">
                  <div className="chart-cell">Size</div>
                  <div className="chart-cell">Bust</div>
                  <div className="chart-cell">Waist</div>
                  <div className="chart-cell">Hips</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">XS</div>
                  <div className="chart-cell">32-33</div>
                  <div className="chart-cell">24-25</div>
                  <div className="chart-cell">34-35</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">S</div>
                  <div className="chart-cell">34-35</div>
                  <div className="chart-cell">26-27</div>
                  <div className="chart-cell">36-37</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">M</div>
                  <div className="chart-cell">36-37</div>
                  <div className="chart-cell">28-29</div>
                  <div className="chart-cell">38-39</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">L</div>
                  <div className="chart-cell">38-40</div>
                  <div className="chart-cell">30-32</div>
                  <div className="chart-cell">40-42</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">XL</div>
                  <div className="chart-cell">41-43</div>
                  <div className="chart-cell">33-35</div>
                  <div className="chart-cell">43-45</div>
                </div>
              </div>
            </div>
          </section>

          {/* Men's Size Chart */}
          <section className="guide-section">
            <h2>👔 Men's Clothing</h2>
            <div className="size-chart">
              <div className="chart-header">
                <h3>Shirts, Tops & Bottoms</h3>
                <p>All measurements in inches</p>
              </div>
              <div className="chart-table">
                <div className="chart-row header">
                  <div className="chart-cell">Size</div>
                  <div className="chart-cell">Chest</div>
                  <div className="chart-cell">Waist</div>
                  <div className="chart-cell">Hips</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">S</div>
                  <div className="chart-cell">34-36</div>
                  <div className="chart-cell">28-30</div>
                  <div className="chart-cell">34-36</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">M</div>
                  <div className="chart-cell">38-40</div>
                  <div className="chart-cell">32-34</div>
                  <div className="chart-cell">38-40</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">L</div>
                  <div className="chart-cell">42-44</div>
                  <div className="chart-cell">36-38</div>
                  <div className="chart-cell">42-44</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">XL</div>
                  <div className="chart-cell">46-48</div>
                  <div className="chart-cell">40-42</div>
                  <div className="chart-cell">46-48</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">XXL</div>
                  <div className="chart-cell">50-52</div>
                  <div className="chart-cell">44-46</div>
                  <div className="chart-cell">50-52</div>
                </div>
              </div>
            </div>
          </section>

          {/* Footwear Size Chart */}
          <section className="guide-section">
            <h2>👟 Footwear</h2>
            <div className="size-chart">
              <div className="chart-header">
                <h3>Men's & Women's Shoes</h3>
                <p>US Sizes</p>
              </div>
              <div className="chart-table">
                <div className="chart-row header">
                  <div className="chart-cell">US</div>
                  <div className="chart-cell">EU</div>
                  <div className="chart-cell">UK</div>
                  <div className="chart-cell">Foot Length (in)</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">6</div>
                  <div className="chart-cell">39</div>
                  <div className="chart-cell">5.5</div>
                  <div className="chart-cell">9.25"</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">7</div>
                  <div className="chart-cell">40</div>
                  <div className="chart-cell">6</div>
                  <div className="chart-cell">9.625"</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">8</div>
                  <div className="chart-cell">41</div>
                  <div className="chart-cell">7</div>
                  <div className="chart-cell">10"</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">9</div>
                  <div className="chart-cell">42</div>
                  <div className="chart-cell">8</div>
                  <div className="chart-cell">10.375"</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">10</div>
                  <div className="chart-cell">43</div>
                  <div className="chart-cell">9</div>
                  <div className="chart-cell">10.75"</div>
                </div>
                <div className="chart-row">
                  <div className="chart-cell">11</div>
                  <div className="chart-cell">44</div>
                  <div className="chart-cell">10</div>
                  <div className="chart-cell">11.125"</div>
                </div>
              </div>
            </div>
          </section>

          {/* Accessories */}
          <section className="guide-section">
            <h2>👜 Accessories</h2>
            <div className="accessories-guide">
              <div className="accessory-category">
                <h3>Belts</h3>
                <p>
                  Choose your belt size based on your pant waist measurement
                  plus 2 inches.
                </p>
                <div className="belt-sizes">
                  <span className="size-tag">S (30-32")</span>
                  <span className="size-tag">M (34-36")</span>
                  <span className="size-tag">L (38-40")</span>
                  <span className="size-tag">XL (42-44")</span>
                </div>
              </div>

              <div className="accessory-category">
                <h3>Hats</h3>
                <p>
                  Measure around your head where the hat will sit, about 1"
                  above eyebrows.
                </p>
                <div className="hat-sizes">
                  <span className="size-tag">S (21-21.5")</span>
                  <span className="size-tag">M (22-22.5")</span>
                  <span className="size-tag">L (23-23.5")</span>
                  <span className="size-tag">XL (24-24.5")</span>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="guide-section tips-section">
            <h2>💡 Pro Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">⭐</div>
                <h4>Know Your Body Type</h4>
                <p>
                  Different brands may fit differently. Consider your body shape
                  when choosing sizes.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">📐</div>
                <h4>Measure Twice</h4>
                <p>Always take measurements 2-3 times to ensure accuracy.</p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">🔄</div>
                <h4>Check Fabric</h4>
                <p>
                  Stretchy fabrics may allow for a more flexible fit than
                  non-stretch materials.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">🏷️</div>
                <h4>Read Reviews</h4>
                <p>
                  Check customer reviews for specific fit information on each
                  product.
                </p>
              </div>
            </div>
          </section>

          {/* Help Section */}
          <section className="help-section">
            <div className="help-content">
              <h2>Still Unsure About Your Size?</h2>
              <p>
                Our customer service team is here to help you find the perfect
                fit. Contact us with your measurements, and we'll recommend the
                best size for you.
              </p>
              <div className="help-actions">
                <a href="/contact" className="help-button primary">
                  Contact Support
                </a>
                <a href="tel:+15551234567" className="help-button secondary">
                  Call Us: +1 (555) 123-4567
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
