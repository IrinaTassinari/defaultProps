// Создайте компонент “TodoItem”, он должен принимать следующие props:
// text - текст элемента в списке (строка)
// isCompleted - флаг, показывающий, выполнено ли дело (boolean).
// Добавьте defaultProps к компоненту TodoItem, которые устанавливают
// значения по умолчанию для следующих ситуаций:
// Если text не предоставлен, должен использоваться текст: “Новая задача”.
// Если isCompleted не передан, его то значение должно быть false, а рядом с
// текстом задачи должен быть текст “Не решена”.


function ToDoItem({text,isCompleted}){
    return(
        <div className="ToDoItem">
            <h4>
                {isCompleted ? "Completed": "Is not completed"}
            </h4>
            <p>
                {text} {!isCompleted && 'need to be done'}
            </p>
        </div>
    )
}

ToDoItem.defaultProps = {
    text:'New task',
    isCompleted: false
}

export default ToDoItem;
