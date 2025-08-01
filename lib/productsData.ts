// data/productsData.js
import { BatteryFull } from "lucide-react";

export const productCategories = [
  {
    title: "Panel",
    icon: "🟨", // You can use a React icon instead
    brands: [
      { name: "Waaree", src: "/images/waaree.png" },
      { name: "Adani", src: "/images/adani.png" },
      { name: "Rayzon", src: "/images/rayzon.png" },
      { name: "Gautam Solar", src: "/images/gautam.png" },
      { name: "Servotech", src: "/images/Servotec.png" },
    ],
  },
  {
    title: "Convertor",
    icon: "🔋",
    brands: [
      { name: "Polycab", src: "/images/polycab.png" },
      { name: "Havells", src: "/images/havells.png" },
      { name: "Sungrow", src: "/images/sungrow.png" },
      { name: "Livguard", src: "/images/livguard.png" },
      { name: "Mindra", src: "/images/mindra.png" },
    ],
  },
  {
    title: "Wire",
    icon: "🔌",
    brands: [
      { name: "Polycab", src: "/images/polycab.png" },
      { name: "Anchor", src: "/images/anchor.png" },
      { name: "RR Kabel", src: "/images/rr.png" },
    ],
  },
];
// <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Our Products
//               </h2>
//               <p className="text-xl text-gray-600">
//                 We have variety of different community product to give a best
//                 working model
//               </p>
//             </div>

//             <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
//               <Card>
//                 <CardHeader className="text-center">
//                   <Grid3x3 className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
//                   <CardTitle>Panel</CardTitle>
//                 </CardHeader>
//                 <CardContent className="center">
//                   <ul
//                     className="space-y-2 text-sm text-gray-600 content-center
// "
//                   >
//                     <div className="flex gap-6">
//                       <img
//                         src="/waaree.png"
//                         alt="waaree"
//                         className="sm:h-16 md:h-20 h-14"
//                       />
//                       <img
//                         src="/adani.png"
//                         alt="adani"
//                         className="sm:h-16 md:h-20 h-14"
//                       />
//                     </div>
//                     <div className="flex gap-4">
//                       <img
//                         src="/rayzon.png"
//                         alt="rayzon.png"
//                         className="sm:h-16 md:h-20 h-14"
//                       />
//                       <img
//                         src="/Gautam.png"
//                         alt="Gautam.png"
//                         className="sm:h-16 md:h-20 h-14"
//                       />
//                     </div>
//                     <img
//                       src="/Servotec.png"
//                       alt="Servotec.png"
//                       className="sm:h-16 md:h-20 h-14"
//                     />
//                     {/* <li>• Waree</li>

//                     <li>• Adani</li>
//                     <li>• Rayzon</li>
//                     <li>• Gautam</li>
//                     <li>• ServoTec</li> */}
//                     {/* <li>• 3D modeling & visualization</li> */}
//                   </ul>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader className="text-center">
//                   <BatteryFull className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
//                   <CardTitle>Convertor</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2 text-sm text-gray-600">
//                     <div className="flex gap-20">
//                       <img
//                         src="/polycab.png"
//                         alt="polycab.png"
//                         className="h-20 pl-6"
//                       />
//                       <img
//                         src="/Havells.png"
//                         alt="Havells.png"
//                         className="h-20"
//                       />
//                     </div>
//                     <div className="flex gap-4">
//                       <img
//                         src="/livguard.png"
//                         alt="livguard.png"
//                         className="h-20"
//                       />
//                       <img
//                         src="/sungrow.png"
//                         alt="sungrow.png"
//                         className="h-10"
//                       />
//                     </div>
//                     <img src="/mindra.png" alt="mindra.png" className="h-20" />
//                   </ul>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader className="text-center">
//                   <Cable className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
//                   <CardTitle>Wire</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2 text-sm text-gray-600">
//                     <div className="flex gap-14">
//                       <img
//                         src="/polycab.png"
//                         alt="polycab.png"
//                         className="h-20"
//                       />
//                       <img src="/rr.png" alt="rr.png" className="h-20" />
//                     </div>
//                     <img src="/anchor.png" alt="anchor.png" className="h-20" />

//                     {/* <li>• Subsidy documentation</li> */}
//                   </ul>
//                 </CardContent>
//               </Card>

//               {/* <Card>
//                 <CardHeader className="text-center">
//                   <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
//                   <CardTitle>Maintenance</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2 text-sm text-gray-600">
//                     <li>• Regular cleaning & inspection</li>
//                     <li>• Performance monitoring</li>

//                     <li>• 24/7 technical support</li>
//                   </ul>
//                 </CardContent>
//               </Card> */}
//             </div>
//           </div>
