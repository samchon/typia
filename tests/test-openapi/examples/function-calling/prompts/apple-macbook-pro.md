### Preface

I will create a sale with the following details.

Target section is "general", and  channel is "samchon". About the categories, just select proper things by your decision.

### Content

At First, title of the sale is “Apple MacBook Pro”.

Below is the content body of the sale.

> MacBook Pro
> 
> 
> **The Ultimate Tool for Professionals**
> 
> MacBook Pro is designed to elevate your creativity and productivity to new heights. Combining exceptional performance, elegant design, and the unparalleled experience only Apple can deliver, this is the device that empowers you to tackle any challenge with confidence.
> 
> - **Remarkable Performance**
>     
>     Powered by the next-generation chip, it handles demanding tasks and complex projects effortlessly, delivering unmatched speed and efficiency.
>     
> - **Outstanding Display**
>     
>     The Retina display offers rich colors and sharp contrast, creating an immersive visual experience. With ProMotion technology, enjoy smooth scrolling and fluid animations like never before.
>     
> - **All-Day Battery Life**
>     
>     Stay focused and in the flow wherever you go with a battery that lasts all day. This is a laptop that works as hard as you do.
>     
> - **Sleek Yet Powerful Design**
>     
>     A precision aluminum body that’s lightweight yet durable, paired with a minimalist design that stands out on your desk and on the go.
>     
> - **Smart Connectivity**
>     
>     Versatile ports for high-speed data transfer and seamless compatibility ensure you're ready for any work environment.
>     
> 
> With MacBook Pro, your potential knows no bounds. **It’s time to rediscover what you’re capable of.**
> 

The base price starts from KRW 2_000_000, and the price may be added depending on the options. However, the final price should always be marked with a 10% discount.

About the thumbnail images, please fill from the below image.

![apple-macbook-pro-thumbnail.png](https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spaceblack-gallery1-202410?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1729264981617)

### SKU

Also, it has only three unit, the "MacBook M3 Pro 14inch Entity", "Warranty Program" and "Magnetic Keyboard".

About the "Warranty Program" unit, it is not essential to the sale, and there is no option to select. Its nominal price is ₩100_000 and the real price is ₩89_000, and its initial quantity is 10_000.

About the "Magnetic Keyboard" unit, it is not essential to the sale, and there is no option to selet either. Its nominal price is ₩200_000, and the real price is ₩169_000. Its initial quantity is 8_000.

About the "MacBook Pro Entity", it is essential to the sale, and there are many options like below. Its list start from the option name, and their nested lists are formed with candidate and and its additional price. And every stocks of it has 10,000 initial quantity.

Compose the SKU records by cartesian product with below option list. Note that, you must multiply every selectable option candidate values of below, and sum of every additional price of selected options and add the starting price KRW 2_000_000.

For reference, as number of SKU from the below list is (`2 * 3 * 3 * 2 = 36`), you have to compose entirely 36 stock records. If an user selects a stock of { Silver (+0) / 32GB (+600_000) / 1TB (+300_000) / English (+0) = 900_000 KRW } options, its nominal price must be 2_900_000 KRW including the starting price 2_000_000 KRW.

- Color
    - Sliver (+0₩)
    - Space Gray (+50_000₩)
- RAM
    - 16GB (+0₩)
    - 32GB (+600_000₩)
    - 64GB (+1_200_000₩)
- SSD
    - 512GB (+0₩)
    - 1TB (+300_000₩)
    - 2TB (+900_000₩)
- Keyboard Language
    - English (+0₩)
    - Korean (+0₩)