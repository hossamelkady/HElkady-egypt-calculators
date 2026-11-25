# HElkady-egypt-calculators

Mobile calculators PWA: zakat on money and gold, Egyptian electricity bill by tier (editable tariff), percentage and discount, 14% VAT, loan installment, BMI, age, bill splitting.

## بالعربي
مجموعة حاسبات للموبايل: زكاة المال، زكاة الذهب، فاتورة الكهرباء بالشرائح (الأسعار قابلة للتعديل)، نسبة وخصم، ضريبة القيمة المضافة 14%، قسط القرض، مؤشر كتلة الجسم، العمر، وقسمة الفاتورة.

## Run
No build step. It is a static web app (PWA) that works on phones and desktop.

```
npm start        # serves the folder, open the printed URL
npm test         # logic tests (Node 18+, no dependencies)
```

Deploy: upload the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages). On a phone, open the site and choose "Add to Home Screen" to install it like an app. To get an APK later, wrap the folder with Capacitor (`npx cap add android`).

## التشغيل
مفيش بناء. افتح `index.html` من خلال أي سيرفر ساكن (`npm start`) أو ارفع المجلد على GitHub Pages أو Netlify، وعلى الموبايل اختار "إضافة إلى الشاشة الرئيسية".

## Notes
- Electricity default tariff (monthly household, piasters per kWh): 68, 87, 106, 174, 218, 235, 289 for the tiers 0-50, 51-100, 101-200, 201-350, 351-650, 651-1000, over 1000. Source: Egyptian press reports of the tariff announced on 31 July 2026 (e.g. https://www.dostor.org/5754685). Tariffs change, so edit the table in the app. The bill does not include fixed service fees. Two modes: each tier priced separately (default), or the whole consumption priced at its tier rate.
- Zakat uses a nisab of 85 g of 24k gold and a rate of 2.5%. The gold price is entered by you. Rulings differ (silver nisab, debts), so check with a scholar for your case.

## License
MIT
