package kanbanboard.controller.api;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;

@Tag(name = "KanbanBoard Controller", description = "kanbanboard APIs")
@Slf4j
@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}

	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> read() {
		log.info("Request card [GET /card]");

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(cardRepository.findAll()));
	}

	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> read(@RequestParam Long cardNo) {
		log.info("Request task [GET task/{}]", cardNo);

		List<Task> tasks = taskRepository.findAllByCardNo(cardNo);
		tasks.forEach(t -> t.setCardNo(cardNo));
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(tasks));
	}

	@PostMapping("/task")
	public ResponseEntity<JsonResult<Task>> create(@RequestBody Task task) {
		log.info("Request [POST /task]{}", task);

		taskRepository.insert(task);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(task));
	}

	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult> update(@PathVariable Long no, @RequestParam String done) {
		log.info("Request [PUT /task/{}]", no);

		taskRepository.updateDone(no, done);

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(Map.of("no", no, "done", done)));
	}

	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long no) {
		log.info("Request [DELETE /task/{}]", no);

		taskRepository.delete(no);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(no));
	}
}
