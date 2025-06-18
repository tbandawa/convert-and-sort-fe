import { Component } from '@angular/core'
import { ApiService } from './services/api.service'
import { Errors } from './models/errors'
import { Data } from './models/data'
import { ErrorResponse, Word } from './models/word'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Convert & Sort'

  word: string[] = []
  errorResponse!: ErrorResponse

  data = new FormControl('', [Validators.required])

  convertForm: FormGroup = this.formBuilder.group({
    data: this.data
  })

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private errors: Errors
  ) { }

  onConvert() {
    let data: Data = { data: <string>this.data.value}
    this.apiService.convertWord(data).subscribe({
      next: data => {
        this.word = data.word
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
