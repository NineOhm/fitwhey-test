const OverviewContent: React.FC = () => {
    return (
        <div className="px-4">
            <h4 className="text-lg font-bold">Whey Protein</h4>
            {['เพิ่มกล้ามเนื้อ', 'ลดไขมัน', 'เพิ่มน้ำหนัก', 'ฟื้นฟูกล้ามเนื้อ', 'ความเร็วในการดูดซึม'].map((text, index) => (
                <div className="flex items-center my-2 justify-between" key={index}>
                    <div className="text-sm">{text}</div>
                    <div className="space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div className={`h-4 w-4 rounded-full ${i < 2 ? 'bg-gray-700' : 'bg-gray-300'} inline-block`} key={i}></div>
                        ))}
                    </div>
                </div>
            ))}
            <p className="text-xs text-gray-500">** เป็นเพียงการประเมิณเพื่อสะท้อน สรรพคุณสินค้าเท่านั้น ไม่ได้เปรียนเทียบระหว่างสินค้า</p>
            <p className="mt-4">
                <strong>BAAM!! MY WHEY </strong>เป็นเวย์ที่มีส่วนผสมของ Whey protein Concentrate เป็นหลัก (95%+)
                ที่มีความคุ้มค่าด้านราคาสูง และสามารถให้ผลได้จริง ตอบโจทย์ได้ทุกเป้าหมาย ไม่ว่าจะเพิ่มกล้ามเนื้อ หรือลดไขมัน
                สามารถใช้ได้ทั้งผู้ชาย และผู้หญิง BAAM!! MY WHEY จึงเหมาะสำหรับเป็นเวย์ถุงแรกของทุกคน
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>โปรตีนดูดซึมไว 25 g. / ช้อน</li>
                <li>พลังงาน 140 Kcal. (ไขมัน 2 กรัม, คาร์โบไฮเดรท 4 กรัม)</li>
                <li>ให้ BCAA ~5.5 g. , Glutamine ~4 g.</li>
                <li>ช่วยซ่อมแซม ฟื้นฟู และ เสริมสร้างมวลกล้ามเนื้อ</li>
                <li>มีส่วนช่วยลดความอยากอาหาร และของหวานได้</li>
                <li>ไม่มีการใส่น้ำตาล (ใช้สารให้ความหวานทดแทน)</li>
                <li>ไม่มีสารอันตราย และ สารต้องห้ามทางกีฬา</li>
                <li>เวย์โปรตีน จาก USA นำเข้า และ ตรวจคุณภาพ โดย FITWHEY</li>
            </ul>
        </div>
    );
};

export default OverviewContent;
