const InfoRealizados = () => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button type="submit" className="border border-gray-700 hover:bg-gray-400 ml-5">Ver</button>
                    <button type="submit" className="border border-orange-600 hover:bg-orange-400 ml-5">Editar</button>
                </div>
        </div>
    );
};

export default InfoRealizados;
