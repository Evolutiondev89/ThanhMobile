const listProducts = [
    { id: "ssa06", name: "Samsung Galaxy A06", price: "3.490.000₫", oldPrice: "", image: "ssa06.jpg", chip: "MediaTek Helio G85", battery: "5000 mAh", screen: "6.7 inch PLS LCD", ram: "4GB", rom: "128GB" },
    { id: "ssa36", name: "Samsung Galaxy A36 5G", price: "8.990.000₫", oldPrice: "", image: "ssa36.jpg", chip: "Snapdragon 6 Gen 3", battery: "5000 mAh", screen: "6.6 inch Super AMOLED 120Hz", ram: "8GB", rom: "256GB" },
    { id: "ssa56", name: "Samsung Galaxy A56 5G", price: "10.490.000₫", oldPrice: "", image: "ssa56.jpg", chip: "Exynos 1580", battery: "5000 mAh", screen: "6.6 inch Super AMOLED 120Hz", ram: "8GB", rom: "256GB" },
    { id: "xiaomi17", name: "Xiaomi 17", price: "15.990.000₫", oldPrice: "", image: "xiaomi-17.png", chip: "Snapdragon 8 Elite Gen 5", battery: "5500 mAh", screen: "6.73 inch AMOLED 2K 120Hz", ram: "12GB", rom: "256GB" },
    { id: "s25ultra", name: "Samsung Galaxy S25 Ultra ", price: "30.990.000₫", oldPrice: "", image: "s25ultra.png", chip: "Snapdragon 8 Elite for Galaxy", battery: "5000 mAh", screen: "6.8 inch Dynamic AMOLED 2X", ram: "12GB", rom: "512GB" },
    { id: "s26", name: "Samsung Galaxy S26 5G", price: "22.990.000₫", oldPrice: "", image: "s26.jpg", chip: "Exynos 2600", battery: "4700 mAh", screen: "6.2 inch Dynamic AMOLED 2X", ram: "8GB", rom: "256GB" },
    { id: "s26plus", name: "Samsung Galaxy S26 Plus", price: "26.990.000₫", oldPrice: "", image: "s26plus.jpg", chip: "Exynos 2600", battery: "5000 mAh", screen: "6.7 inch Dynamic AMOLED 2X", ram: "12GB", rom: "256GB" },
    { id: "s26ultra", name: "Samsung Galaxy S26 Ultra", price: "35.990.000₫", oldPrice: "", image: "s26ultra.jpg", chip: "Snapdragon 8 Elite Gen 5", battery: "5500 mAh", screen: "6.9 inch Dynamic AMOLED 2X", ram: "16GB", rom: "512GB" },
    { id: "iphone17pro", name: "iPhone 17 Pro ", price: "28.990.000₫", oldPrice: "", image: "iphone17pro.jpg", chip: "Apple A19 Pro", battery: "3800 mAh", screen: "6.3 inch Super Retina XDR ProMotion", ram: "12GB", rom: "256GB" },
    { id: "iphone17promax", name: "iPhone 17 Pro Max ", price: "34.990.000₫", oldPrice: "36.990.000₫", image: "iphone17promax.jpg", chip: "Apple A19 Pro", battery: "4800 mAh", screen: "6.9 inch Super Retina XDR ProMotion", ram: "12GB", rom: "256GB" },
    { id: "xiaomi15t", name: "Xiaomi 15T 5G Chính hãng", price: "12.990.000₫", oldPrice: "", image: "xiaomi15t.jpg", chip: "MediaTek Dimensity 8400", battery: "5500 mAh", screen: "6.67 inch AMOLED 144Hz", ram: "12GB", rom: "256GB" },
    { id: "xiaomi15tpro", name: "Xiaomi 15T Pro ", price: "15.490.000₫", oldPrice: "", image: "xiaomi15tpro.jpg", chip: "MediaTek Dimensity 9400+", battery: "5500 mAh", screen: "6.67 inch AMOLED 144Hz", ram: "12GB", rom: "512GB" },
    { id: "redmi14", name: "Xiaomi Redmi Note 14", price: "4.590.000₫", oldPrice: "5.000.000₫", image: "redmi144g.png", chip: "MediaTek Heilo G99 Ultra", battery: "5000 mAh", screen: "6.67 inch OLED 120Hz", ram: "8GB", rom: "128GB" },
    { id: "redmi14pro", name: "Xiaomi Redmi Note 14 Pro 5G", price: "6.890.000₫", oldPrice: "", image: "redmi14pro.png", chip: "Snapdragon 7s Gen 3", battery: "5500 mAh", screen: "6.67 inch AMOLED 120Hz", ram: "8GB", rom: "256GB" },
    { id: "redmi15pro", name: "Xiaomi Redmi Note 15 Pro Chính hãng", price: "8.990.000₫", oldPrice: "", image: "redmi15pro.jpg", chip: "Snapdragon 7 Gen 4", battery: "5500 mAh", screen: "6.67 inch AMOLED 120Hz", ram: "12GB", rom: "256GB" },
    { id: "s23ultra", name: "Samsung Galaxy S23 Ultra", price: "10.990.000₫", oldPrice: "", image: "s23ultra.png", chip: "Snapdragon 8 Gen 2 for Galaxy", battery: "5000 mAh", screen: "6.8 inch Dynamic AMOLED 2X 120Hz", ram: "8GB", rom: "256GB" },
    { id: "v300", name: "Vivo X300 Ultra", price: "26.990.000₫", image: "vivo300.jpg", chip: "Snapdragon 8 Elite Gen 5", battery: "6500 mAh", screen: "6.9 inch Dynamic AMOLED 2X", ram: "16GB", rom: "512GB"},
    { id: "v200", name: "Vivo X200 Ultra", price: "20.990.000₫", image: "vivo200.jpg", chip: "Snapdragon 8 Elite ", battery: "5500 mAh", screen: "6.8 inch Dynamic AMOLED 2X", ram: "16GB", rom: "512GB"},
    { id: "v100", name: "Vivo X100 Ultra", price: "14.990.000₫", image: "vivo100.jpg", chip: "Snapdragon 8 Gen 3", battery: "5000 mAh", screen: "6.7 inch Dynamic AMOLED 2X", ram: "16GB", rom: "512GB"},
    { id: "iqz10", name: "Vivo Iqoo Z10 Turbo Plus", price: "7.990.000₫", image: "iqooz10.jpg", chip: "Dimensity 9400+", battery: "8000 mAh", screen: "6.7 inch Dynamic AMOLED 2X", ram: "16GB", rom: "512GB"}
    
    
];

const listChargers = [
    // --- NHÓM CỦ CÁP SẠC ---
    { 
        id: "sac_xiaomi67w", 
        name: "Củ cáp sạc Xiaomi 67W", 
        price: "200.000 đ", 
        image: "sac67w.jpg",
        description: "Model Sạc 67W Xiaomi (MDY-12-EH). Nguồn vào 100 – 240V ~ 50/60Hz, 1.7A. Đầu ra linh hoạt 5V-3A, 9V-3A, 11V-6.1A Max, 20V-3.25A Max. Kích thước 58.65 x 54.2 x 28.4mm. Cổng kết nối USB-A.",
        compatibility: "Tương thích hoàn hảo với các dòng máy Xiaomi, Redmi, POCO hỗ trợ sạc nhanh Turbo Charge."
    },
    { 
        id: "sac_xiaomi33w", 
        name: "Củ cáp sạc Xiaomi 33W", 
        price: "180.000 đ", 
        image: "sac33w.jpg",
        description: "Model Sạc 33W Xiaomi (MDY-11-EX). Nguồn vào 100 – 240V ~ 50/60Hz, 0.7A. Đầu ra 5V-3A, 9V-3A, 12V-2.25A, 20V-1.35A, 11V-3A Max. Kích thước nhỏ gọn 46.8 x 28.0 x 55.4mm. Cổng kết nối USB-A.",
        compatibility: "Các dòng điện thoại Xiaomi tầm trung và các thiết bị hỗ trợ Quick Charge 3.0."
    },
    { 
        id: "sac_xiaomi120w", 
        name: "Củ cáp sạc Xiaomi 120w", 
        price: "199.000 đ", 
        image: "sac120w.jpg",
        description: "Model Sạc GaN 120W Xiaomi (MDY-12-ED). Nguồn vào 100 – 240V ~ 50/60Hz, 1.7A. Đầu ra công suất cao 5V-3A, 9V-3A, 11V-6A Max, 20V-6A Max. Kích thước 63.5 x 60.3 x 28.4mm. Cổng kết nối USB-A.",
        compatibility: "Các dòng Flagship Xiaomi (Xiaomi 13 Pro, 14 Ultra...) và Laptop hỗ trợ Power Delivery."
    },
    { 
        id: "sac_iphone20w", 
        name: "Củ cáp sạc iPhone 20W", 
        price: "70.000 đ", 
        image: "sacip20w.jpg",
        description: "Model Củ sạc iPhone 20W Apple (A2347). Nguồn vào 100 – 240V ~ 50/60Hz, 0.5A. Đầu ra chuẩn sạc nhanh 5V-3A, 9V-2.22A. Kích thước tiêu chuẩn 42.0 x 41.5 x 27.2mm. Cổng kết nối USB-C (Power Delivery).",
        compatibility: "Tối ưu hóa tuyệt đối cho iPhone 12, 13, 14, 15, 16 Series và các dòng iPad."
    },
]
const listFans = [
    { 
        id: "memo_cxa3", 
        name: "Quạt tản nhiệt MEMO CX A3", 
        price: "200.000 đ", 
        image: "memocxa3.jpg",
        description: "Dòng sản phẩm MEMO CX-A3 (Magnetic Sò Lạnh). Công nghệ sò lạnh hạt bán dẫn kích thước lớn, giúp hạ nhiệt siêu tốc cho thiết bị. Tốc độ quạt lên tới 7500 vòng/phút (RPM) nhưng vận hành cực kỳ êm ái. Cổng cấp nguồn Type-C ổn định. Trang bị hệ thống đèn LED RGB Gaming tự động chuyển màu sinh động. Trọng lượng siêu nhẹ khoảng 68g không gây mỏi tay khi cầm lâu. Cách thức gắn hút nam châm từ tính tiện lợi.",
        compatibility: "Tặng kèm miếng dán từ tính hỗ trợ tốt cho tất cả các máy vỏ nhựa hoặc không có mặt lưng nam châm."
    },
    { 
        id: "memo_cx02", 
        name: "Quạt tản nhiệt MEMO CX 02", 
        price: "180.000 đ", 
        image: "memocx02.jpg",
        description: "Dòng sản phẩm MEMO CX02. Sử dụng chip sò lạnh thế hệ mới bọc diện tích tản nhiệt siêu rộng. Tốc độ quạt mạnh mẽ đạt 7000 vòng/phút (RPM). Cổng cấp nguồn Type-C thông dụng. Hệ thống đèn LED RGB liên tục đổi màu đặc sắc. Cách thức gắn hút từ tính nhanh chóng.",
        compatibility: "Tương thích tốt với hầu hết hệ điều hành Android, iOS và các thiết bị di động hiện nay."
    },
    { 
        id: "memo_cx01", 
        name: "Quạt tản nhiệt MEMO CX 01", 
        price: "200.000 đ", 
        image: "memocx01.jpg",
        description: "Dòng sản phẩm MEMO CX01. Công nghệ chip sò lạnh thế hệ mới bọc diện tích tản nhiệt rộng giúp làm mát tức thì. Tốc độ quạt quay 6000 vòng/phút (RPM). Tích hợp cổng cấp nguồn Type-C thông dụng cùng đèn LED RGB liên tục đổi màu sinh động. Cách thức gắn hút từ tính tiện lợi.",
        compatibility: "Tương thích tốt với hầu hết hệ điều hành Android, iOS và các thiết bị di động hiện nay."
    },
    { 
        id: "memo_dl16", 
        name: "Quạt tản nhiệt MEMO DL16", 
        price: "199.000 đ", 
        image: "memodl16.jpg",
        description: "Dòng sản phẩm MEMO DL16 (Kẹp Gaming). Công nghệ làm lạnh bằng sò lạnh đóng băng trực tiếp, có khả năng giảm ngay tới 20 độ C cho máy. Tốc độ quạt mạnh mẽ 7200 vòng/phút. Cổng cấp nguồn Type-C thông dụng. Cách thức gắn bằng ngàm kẹp lò xo hai đầu vô cùng chắc chắn. Đặc biệt tích hợp màn hình LED hiển thị thông số nhiệt độ thực tế của máy khi đang hoạt động.",
        compatibility: "Ngàm kẹp co giãn hỗ trợ toàn diện cho các dòng điện thoại có bề rộng từ 65-85mm."
    },
]
const listEarphones = [
    { 
        id: "airpod_2", 
        name: "Tai nghe Bluetooth AirPods 2 (Hổ Vằn)", 
        price: "250.000 đ", 
        image: "airpods2hovan.jpg",
        description: "Trang bị chip xử lý Louda 1562M (Phiên bản Hổ Vằn cao cấp chuẩn). Phiên bản kết nối Bluetooth 5.3 cực kỳ ổn định trong bán kính 10m. Thời lượng pin tai nghe cho khoảng 4 đến 5 giờ nghe nhạc liên tục. Thời lượng pin dock sạc lớn hỗ trợ sạc lại cho tai nghe từ 3-4 lần đầy. Thời gian sạc đầy khoảng 1 tiếng rưỡi qua cổng Lightning thông dụng. Tích hợp các tính năng thông minh như cảm biến hồng ngoại tháo tai dừng nhạc, đổi tên và định vị vị trí. Chất âm sở hữu âm bass ấm, treble trong trẻo, đàm thoại micro rõ ràng.",
        compatibility: "Tương thích tốt với hầu hết hệ điều hành Android, iOS và các thiết bị di động hiện nay."
    },
    { 
        id: "airpod_3", 
        name: "Tai nghe Bluetooth AirPods 3 (Hổ Vằn)", 
        price: "299.000 đ", 
        image: "airpods3hovan.jpg",
        description: "Tích hợp chip xử lý Louda 1562E giúp tối ưu hóa điện năng vượt trội. Chuẩn Bluetooth 5.3 giúp tiết kiệm pin tối đa. Thời lượng pin tai nghe ấn tượng lên tới 5-6 giờ sử dụng liên tục. Dung lượng dock sạc thoải mái dùng trong vòng 2-3 ngày. Hỗ trợ các tính năng thông minh như cảm ứng lực (bóp đuôi tai nghe) để điều khiển và công nghệ âm thanh không gian thực tế sống động. Thiết kế dạng Earbuds công thái học ôm sát giúp không gây đau tai khi đeo trong thời gian dài.",
        compatibility: "Tương thích tốt với hầu hết hệ điều hành Android, iOS và các thiết bị di động hiện nay."
    },
    { 
        id: "airpod_pro2", 
        name: "Tai nghe Bluetooth AirPods Pro 2 Rep 1:1", 
        price: "320.000 đ", 
        image: "airpodspro2.jpg",
        description: "Sử dụng chip xử lý Louda 1562F giúp tối ưu hóa âm thanh vô cùng mượt mà. Kết nối nhanh chóng với phiên bản Bluetooth 5.2. Thời lượng pin tai nghe đạt khoảng 4-5 giờ sử dụng liên tục. Dock sạc hỗ trợ sạc lại 3-4 lần và tích hợp thêm loa cảnh báo tiện lợi trên dock. Tính năng thông minh cho phép vuốt tăng giảm âm lượng trực tiếp trên thân tai nghe, định vị và đổi tên dễ dàng. Thiết kế độc đáo, hiện đại đi kèm các núm cao su silicon mềm mại.",
        compatibility: "Tương thích tốt với hầu hết hệ điều hành Android, iOS và các thiết bị di động hiện nay."
    },
    { 
        id: "airpod_pro", 
        name: "Tai nghe Bluetooth AirPods Pro (Hổ Vằn)", 
        price: "350.000 đ", 
        image: "airpodsprohovan.jpg",
        description: "Sở hữu chip xử lý Louda 1562F hỗ trợ chống ồn chủ động mạnh mẽ. Phiên bản Bluetooth 5.2 giúp kết nối đa thiết bị một cách nhanh chóng. Thời lượng pin tai nghe hoạt động khoảng 4-5 giờ kể cả khi bật chế độ ANC. Tính năng đặc biệt gồm chống ồn chủ động (ANC) và Xuyên âm (Transparency Mode) thực tế cực kỳ nhạy. Chất âm đỉnh cao với âm thanh cực chất, bass sâu và uy lực. Kiểu dáng In-ear sang trọng đi kèm các núm cao su thay thế chống lọt tạp âm bên ngoài.",
        compatibility: "Tương thích tốt với hầu hết hệ điều hành Android, iOS và các thiết bị di động hiện nay."
    }
];